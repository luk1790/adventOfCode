var fs = require("fs");
const path = require("path");

var downloadFile = (fileName) => {
  let countforOnce = ({ data }) => {
    let localData = JSON.parse(JSON.stringify(data));
    let actualCommand = localData[0];
    let counter = 0;
    let acc = 0;

    while (actualCommand.count === 0) {
      // console.log("%o - %o", actualCommand, counter);
      if (actualCommand.command === "acc") {
        acc += actualCommand.number;
        localData[counter].count++;
        counter++;
      } else if (actualCommand.command === "jmp") {
        localData[counter].count++;
        counter += actualCommand.number;
      } else if (actualCommand.command === "nop") {
        localData[counter].count++;
        counter++;
      }
      actualCommand = localData[counter];
    }
    return acc;
  };
  let countforOnceFixProgram = (data) => {
    let localData = JSON.parse(JSON.stringify(data));
    let actualCommand = localData[0];
    let counter = 0;
    let acc = 0;
    let oneChange = true;
    while (counter < localData.length && actualCommand.count === 0) {
      // console.log("%o - %o  %o", actualCommand, counter, localData.length);
      if (actualCommand.command === "acc") {
        acc += actualCommand.number;
        localData[counter].count++;
        counter++;
      } else if (actualCommand.command === "jmp") {
        console.log(
          "%o - %o  %o %o",
          actualCommand,
          counter,
          counter + 1,
          localData.length
        );
        if (counter + 1 === localData.length - 1 && oneChange) {
          console.log("sd");
          localData[counter].count++;
          counter++;
          oneChange = false;
        } else {
          localData[counter].count++;
          counter += actualCommand.number;
        }
      } else if (actualCommand.command === "nop") {
        console.log(
          "%o - %o  %o %o",
          actualCommand,
          counter,
          counter + actualCommand.number,
          localData.length
        );
        if (
          counter + actualCommand.number === localData.length - 1 &&
          oneChange
        ) {
          console.log("sd");
          localData[counter].count++;
          counter += actualCommand.number;
          oneChange = false;
        } else {
          localData[counter].count++;
          counter++;
        }
      }
      actualCommand = localData[counter];
    }
    return acc;
  };
  var parseData = (data) => {
    let splitData = data.split(/\n/);
    // console.log(splitData);

    splitData = splitData.map((val) => {
      let splitVal = val.split(" ");
      return {
        command: splitVal[0],
        number: parseInt(splitVal[1], 10),
        count: 0,
      };
    });
    // console.log(splitData);

    let result = countforOnce({ data: splitData });
    console.log("acc is %o", result);
    let result2 = countforOnceFixProgram(splitData);
    console.log("acc is %o", result2);
  };

  fs.readFile(`${__dirname}/${fileName}`, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    parseData(data);
  });
};

downloadFile("data.txt");
// downloadFile("test.txt");
// downloadFile("test2.txt");
