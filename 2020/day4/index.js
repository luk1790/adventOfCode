
var fs = require("fs");

var downloadFile = (fileName) => {
  let requirementCode = {
    byr: { min: 1920, max: 2002 },
    iyr: { min: 2010, max: 2020 },
    eyr: { min: 2020, max: 2030 },
    hgt: { cm: { min: 150, max: 193 }, in: { min: 59, max: 76 } },
    hcl: { regex: "#[a-f0-9]{6}" },
    ecl: { oneof: ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"] },
    pid: { length: 9, first: "0" },
  };
  let ValidPassport = 0;

  let parseDataToNumber = (value) => value - 1 + 1;

  let checkReq = (data) => {
    // console.log(data);
    switch (data.key) {
      case "byr":
        return (
          parseDataToNumber(data.value) >= requirementCode.byr.min &&
          parseDataToNumber(data.value) <= requirementCode.byr.max
        );
        break;
      case "iyr":
        return (
          parseDataToNumber(data.value) >= requirementCode.iyr.min &&
          parseDataToNumber(data.value) <= requirementCode.iyr.max
        );
        break;

      case "eyr":
        return (
          parseDataToNumber(data.value) >= requirementCode.eyr.min &&
          parseDataToNumber(data.value) <= requirementCode.eyr.max
        );
        break;
      case "hgt":
        if (data.value.indexOf("in") > 0) {
          return (
            parseDataToNumber(data.value.replace("in", "")) >=
              requirementCode.hgt.in.min &&
            parseDataToNumber(data.value.replace("in", "")) <=
              requirementCode.hgt.in.max
          );
        } else if (data.value.indexOf("cm") > 0) {
          return (
            parseDataToNumber(data.value.replace("cm", "")) >=
              requirementCode.hgt.cm.min &&
            parseDataToNumber(data.value.replace("cm", "")) <=
              requirementCode.hgt.cm.max
          );
        } else {
          return false;
        }
        break;
      case "hcl":
        return (
          data.value.length === 7 &&
          new RegExp(requirementCode.hcl.regex).test(data.value)
        );
        break;
        case "ecl":
          return requirementCode.ecl.oneof.includes(data.value);
          break;
        case "pid":
          return !isNaN(data.value-1+1) && data.value.length === requirementCode.pid.length ;
          break;
    }
  };

  var parseData = (data) => {
    let passportPartData = data.split(/\n\n/);
    let parseData = passportPartData.map((val) => {
      return val
        .split("\n")
        .join(" ")
        .split(" ")
        .map((value) => {
          let data = value.split(":");
          return { key: data[0], value: data[1] };
        });
    });
    // console.log(parseData)

    parseData.forEach((val) => {
      let data = val.filter((entry) => entry.key !== "cid");
      // console.log(data);
      data = data.filter((entry) => {
        return checkReq(entry);

      });
      // console.log(data);
      // console.log(data.length);
      // 
      if (data.length === 7) {
        ValidPassport++;
      }
    });

    console.log("valid passports %o", ValidPassport);
  };
  fs.readFile(
    `/home/lukasz/Projects/adventOfCode/day4/${fileName}`,
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      //   console.log(data);
      parseData(data);
    }
  );
};

downloadFile("data.txt");
// downloadFile("test.txt");
