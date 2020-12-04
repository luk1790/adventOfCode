

var data = require("./data");
var map = data.data();

let lengthOneRow = map[0].length ;

let tree = "#";

let countTrees = ({ right, down }) => {
  let treeCounter = 0;
  let counter = 0;
  let counterI = 1;

  for (var i = down; i < map.length; i += down) {
    counter = counterI * right;
    if (counter >= lengthOneRow) {
        counter = counter % lengthOneRow;
    }
    // console.log(map[i][counter]);
    
    // console.log("%o - %o", i, counter);
    if (map[i][counter] === tree) {
      treeCounter++;
    }

    if (map[i][counter] !== tree && map[i][counter]!=='.') {
      console.log('----------------------ERROR------------------------')
    }
    counterI++;
  }
  console.log(
    "Slopes (right %o , down %o) - trees number %o",
    right,
    down,
    treeCounter
  );
  return treeCounter;
};


console.log(
  countTrees({ right: 1, down: 1 }) *
    countTrees({ right: 3, down: 1 }) *
    countTrees({ right: 5, down: 1 }) *
    countTrees({ right: 7, down: 1 }) *
    countTrees({ right: 1, down: 2 })
);
