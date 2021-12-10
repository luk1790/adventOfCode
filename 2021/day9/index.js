const data = require("./data.json");
// const data = require("./dataTest.json");


const xmax = data[0].length - 1;
const ymax = data.length - 1;

let resultTable = [];

const checkAdjacent = (data, { x, y }) => {
  if (x === 0 && y === 0) {
    // corner
    return (
      data[y][x + 1] > data[y][x] &&
      data[y + 1][x] > data[y][x] &&
      data[y + 1][x + 1] > data[y][x]
    );
  } else if (x === 0 && y === ymax) {
    // corner
    return (
      data[y][x + 1] > data[y][x] &&
      data[y - 1][x] > data[y][x] &&
      data[y - 1][x + 1] > data[y][x]
    );
  } else if (x === xmax && y === 0) {
    // corner
    return (
      data[y][x - 1] > data[y][x] &&
      data[y + 1][x] > data[y][x] &&
      data[y + 1][x - 1] > data[y][x]
    );
  } else if (x === xmax && y === ymax) {
    // corner
    return (
      data[y][x - 1] > data[y][x] &&
      data[y - 1][x] > data[y][x] &&
      data[y - 1][x - 1] > data[y][x]
    );
  } else if (y === 0) {
    //line
    return (
      data[y][x - 1] > data[y][x] &&
      data[y][x + 1] > data[y][x] &&
      data[y + 1][x - 1] > data[y][x] &&
      data[y + 1][x] > data[y][x] &&
      data[y + 1][x + 1] > data[y][x]
    );
  } else if (y === ymax) {
    //line
    return (
      data[y][x - 1] > data[y][x] &&
      data[y][x + 1] > data[y][x] &&
      data[y - 1][x - 1] > data[y][x] &&
      data[y - 1][x] > data[y][x] &&
      data[y - 1][x + 1] > data[y][x]
    );
  } else if (x === 0) {
    //line
    return (
      data[y-1][x] > data[y][x] &&
      data[y+1][x] > data[y][x] &&
      data[y - 1][x + 1] > data[y][x] &&
      data[y][x+1] > data[y][x] &&
      data[y + 1][x + 1] > data[y][x]
    );
  } else if (x === xmax) {
    //line
    return (
      data[y-1][x] > data[y][x] &&
      data[y+1][x] > data[y][x] &&
      data[y - 1][x - 1] > data[y][x] &&
      data[y][x-1] > data[y][x] &&
      data[y + 1][x - 1] > data[y][x]
    );
  } else {
    return (
      data[y - 1][x - 1] > data[y][x] &&
      data[y-1][x] > data[y][x] &&
      data[y-1][x+1] > data[y][x] &&
      data[y][x-1] > data[y][x] &&
      data[y][x+1] > data[y][x] &&
      data[y+1][x-1] > data[y][x] &&
      data[y+1][x] > data[y][x] &&
      data[y+1][x+1] > data[y][x]
    )
  }
};

for (let x = 0; x <= xmax; x++) {
  for (let y = 0; y <= ymax; y++) {
    if (checkAdjacent(data, { x, y })) {
      resultTable.push(data[y][x])
    }
  }
}

let result = resultTable.map(val => parseInt(val) + 1).reduce((prev, acc) => prev + acc);

console.log(`wynik : ${result}`);
// console.log(`wynik druga czesc : ${countLanternfish(data, 256)}`);
