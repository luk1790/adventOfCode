var data = require(`./dataTest.json`);

const countIncrease = (data) => {
  let counter = 0;
  for (let index = 1; index < data.length; index++) {
    if (data[index] > data[index - 1]) {
      counter++;
    }
  }
  return counter;
};

let newData = [];

for (let index = 2; index < data.length; index++) {
  newData.push(data[index-2]+data[index-1]+data[index])
  
}

console.log(`wynik : ${countIncrease(data)}`);
console.log(`wynik druga czesc : ${countIncrease(newData)}`);
