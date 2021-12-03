const data = require("./data.json");
// const data = require("./dataTest.json");

const gammaRate = (data) => {
  const countPosition = data[0].split("").fill(0);
  for (let index = 0; index < data.length; index++) {
    for (let indexR = 0; indexR < countPosition.length; indexR++) {
      countPosition[indexR] += parseInt(data[index][indexR]);
    }
  }
  let gamma = countPosition
    .map((val) => (val >= data.length / 2 ? "1" : "0"))
    .join("");
  let rate = countPosition
    .map((val) => (val < data.length / 2 ? "1" : "0"))
    .join("");

  return { gamma, rate };
};

const oxygenOrCO = (data, gammaOrRate, type) => {
  const filterData = (data, sign, position) =>
    data.filter((element) => element[position] === sign);
  let result = data;
  let gammaOrRateResult = gammaOrRate;

  for (let index = 0; index < gammaOrRateResult.length; index++) {
    if (result.length > 1) {
      result = filterData(result, gammaOrRateResult[index], index);
      let { gamma, rate } = gammaRate(result);
      gammaOrRateResult = type === "gamma" ? gamma : rate;
    }
  }

  return result[0];
};

let { gamma, rate } = gammaRate(data);
let oxygen = oxygenOrCO(data, gamma, "gamma");
let co2 = oxygenOrCO(data, rate, "rate");

console.log(`wynik : ${parseInt(rate, 2) * parseInt(gamma, 2)}`);
console.log(`wynik druga czesc : ${parseInt(co2, 2) * parseInt(oxygen, 2)}`);
