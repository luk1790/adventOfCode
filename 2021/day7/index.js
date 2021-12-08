const data = require("./data.json");
// const data = require("./dataTest.json");

const countFuel = data => {

  let max = Math.max(...data)
  let result = [];
  result.length = max+1
  result.fill(0)

  for (let index = 0; index <= max; index++) {
    for (const value of data) {
      result[index] += Math.abs(value - index);
    }
  }

  return Math.min(...result);
}

const countCorrectFuel = data => {

  let max = Math.max(...data)
  let result = [];
  result.length = max+1
  result.fill(0)

  for (let index = 0; index <= max; index++) {
    for (const value of data) {
      
      let moveTo = Math.abs(value - index)
      for (let costsFuel = 1; costsFuel < moveTo+1; costsFuel++) {
        result[index] += costsFuel
      }
    }
  }

  return Math.min(...result);
}

console.log(`wynik : ${countFuel(data)}`);
console.log(`wynik druga czesc : ${countCorrectFuel(data)}`);


