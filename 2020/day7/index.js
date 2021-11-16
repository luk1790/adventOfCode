var fs = require("fs");
const path = require("path");

var downloadFile = (fileName) => {
  var getColourBag = ({ name, data }) => {
    let arrayBags = data.filter((val) => {
      let result = false;
      for (let i = 0; i < val.contains.length; i++) {
        if (val.contains[i].name === name) {
          result = true;
        }
      }
      return result;
    });
    let resultName = arrayBags.map((val) => val.bag);
    if (resultName.length > 0) {
      resultName
        .map((element) => {
          return getColourBag({ name: element, data });
        })
        .forEach((val) => (resultName = [...resultName, ...val]));
    }
    return resultName.filter((val) => val.length > 0);
  };

  var getColourBagContains = ({ name, data, counter }) => {
    let dataBag = data
      .filter((val) => val.bag === name)
      .map((val) => val.contains);
    dataBag.forEach((val, j) => {
      val.forEach((element, i) => {
        dataBag[j][i]["child"] = getColourBagContains({
          name: element.name,
          data,
        });
      });
    });
    return dataBag;
  };

  var countBags = (counterContain, count) => {
    let counterC = count;
    counterContain.forEach((v) => {
      v.forEach((val) => {
        counterC += val.count;
        if (val.child.length > 0) {
          counterC += val.count * countBags(val.child, 0);
        }
      });
    });
    return counterC;
  };
  var parseData = (data) => {
    let splitData = data.split(/\n/);
    // console.log(splitData);

    splitData = splitData
      .map((val) => {
        let data = val.split("contain");
        let contains = data[1].split(", ").map((val) => {
          let singleBagContain = val
            .replace(" bags,", "")
            .replace(" bags.", "")
            .replace(" bag,", "")
            .replace(" bag.", "")
            .trim();

          if (!isNaN(singleBagContain[0] - 1)) {
            return {
              count: parseInt(singleBagContain[0], 10),
              name: singleBagContain
                .substr(1, singleBagContain.length)
                .replace(" bags", "")
                .replace(" bag", "")
                .trim(),
            };
          } else {
            return null;
          }
        });
        if (contains[0] !== null) {
          return {
            bag: data[0].replace(" bags ", ""),
            contains,
          };
        }
      })
      .filter((val) => val !== undefined);
    let counterContain = getColourBagContains({
      name: "shiny gold",
      data: splitData,
      counter: 0,
    });
    console.log('"shiny gold bags contains %o"', countBags(counterContain, 0));
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
