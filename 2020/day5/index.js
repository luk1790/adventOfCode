var fs = require("fs");

var downloadFile = (fileName) => {
  let decodeData = (value) => {
    let dataRow = { min: 0, max: 127 };
    let dataColumn = { min: 0, max: 7 };
    let row = value.slice(0, 7);
    let column = value.slice(7, 10);
    let result = { row: 0, column: 0 };
    for (var i = 0; i < row.length; i++) {
      let lengthDataRow = Math.round((dataRow.max - dataRow.min - 1) / 2);
      if (row[i] === "F") {
        dataRow = { min: dataRow.min, max: dataRow.min + lengthDataRow };
      } else if (row[i] === "B") {
        dataRow = { min: dataRow.max - lengthDataRow, max: dataRow.max };
      }
    }
    result.row = row[6] === "F" ? dataRow.min : dataRow.max;

    for (var j = 0; j < column.length; j++) {
      let lengthDataColumn = Math.round(
        (dataColumn.max - dataColumn.min - 1) / 2
      );
      if (column[j] === "L") {
        dataColumn = {
          min: dataColumn.min,
          max: dataColumn.min + lengthDataColumn,
        };
      } else if (column[j] === "R") {
        dataColumn = {
          min: dataColumn.max - lengthDataColumn,
          max: dataColumn.max,
        };
      }
    }
    result.column = column[2] === "L" ? dataColumn.min : dataColumn.max;


    return result;
  };

  var parseData = (data) => {
    let arrayData = data.split(/\n/);
    let seatId = 0;
    let allSeatIds = [];
    arrayData.forEach((element) => {
      let result = decodeData(element);
      allSeatIds.push(result.row * 8 + result.column);
      if (seatId < result.row * 8 + result.column) {
        seatId = result.row * 8 + result.column;
      }
    });

    console.log('Highest ID is ', seatId)

    let counter = 32;
    let yourSEAT = 0;
    allSeatIds
      .sort((a, b) => a - b)
      .forEach((val) => {
        if (val !== counter) {
          yourSEAT = counter
        } else {
        counter++;
        }
      });
    console.log(yourSEAT);
  };

  fs.readFile(
    `/home/lukasz/Projects/adventOfCode/day5/${fileName}`,
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      parseData(data);
    }
  );
};

downloadFile("data.txt");
// downloadFile("test.txt");
