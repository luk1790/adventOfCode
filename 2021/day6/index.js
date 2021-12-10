// const data = require("./data.json");
const data = require("./dataTest.json");

const countLanternfish = (data, days) => {
  let tempData = [...data];
  for (let day = 1; day <= days; day++) {
    tempData.forEach((val, key) => {
      if (val === 0) {
        tempData[key] = 6;
        tempData.push(8);
      } else {
        tempData[key] -= 1;
      }
    });
  }
  return tempData.length;
};

console.log(`wynik : ${countLanternfish(data, 80)}`);
// console.log(`wynik druga czesc : ${countLanternfish(data, 256)}`);
