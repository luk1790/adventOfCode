const data = require("./data.json");
const boards = require("./dataBoards.json");
// const data = require("./dataTest.json");
// const boards = require("./dataTestBoards.json");

const parseBoard = (boards) => {
  let resultBoards = [];
  let index = 0;
  for (const line of boards) {
    if (line.length > 0) {
      if (resultBoards[index] === undefined) {
        resultBoards[index] = [];
      }
      resultBoards[index].push(line.split(" ").filter((val) => val.length));
    } else {
      index++;
    }
  }
  return resultBoards;
};
const bingo = (data, boards) => {

  const checkRow = (board, numbers) => {
    let bingo = false;
    for (const line of board) {
      let result = line.filter((value) => !numbers.includes(parseInt(value)));
      if (result.length === 0) {
        bingo = true;
      }
    }
    return bingo;
  };

  const checkColumn = (board, numbers) => {
    let newBoard = [];
    for (let index = 0; index < board.length; index++) {
      for (let index2 = 0; index2 < board[index].length; index2++) {
        if (newBoard[index] === undefined) {
          newBoard[index] = [];
        }
        newBoard[index][index2] = board[index2][index];
      }
    }
    return checkRow(newBoard, numbers);
  };

  const findFirstBingo = (data, boards) => {
    let numbersBingo = [];
    let foundBingo = [];

    for (const value of data) {
      for (let index = 0; index < boards.length; index++) {
        if (
          checkRow(boards[index], numbersBingo) ||
          checkColumn(boards[index], numbersBingo)
        ) {
          foundBingo.push(index);
        } else {
          if (foundBingo.length === 0 && !numbersBingo.includes(value)) {
            numbersBingo.push(value);
          }
        }
      }
    }

    let result = { unmarked: 0 };
    boards[foundBingo[0]].forEach((line) => {
      line.forEach((value) => {
        if (!numbersBingo.includes(parseInt(value))) {
          result.unmarked += parseInt(value);
        }
      });
    });

    return {unmarked: result.unmarked, numbersBingo}
  };
  const orderBingo = (data, boards) => {
    let numbersBingo = [];
    let foundBingo = [];

    for (const value of data) {
      for (let index = 0; index < boards.length; index++) {
        if (
          checkRow(boards[index], numbersBingo) ||
          checkColumn(boards[index], numbersBingo)
        ) {
          if(!foundBingo.includes(index)){
          foundBingo.push(index);
          }
        } else {
          if (!numbersBingo.includes(value)) {
            numbersBingo.push(value);
          }
        }
      }
    }

    let result = { unmarked: 0 };
    boards[foundBingo.pop()].forEach((line) => {
      line.forEach((value) => {
        if (!numbersBingo.includes(parseInt(value))) {
          result.unmarked += parseInt(value);
        }
      });
    });

    return {unmarked: result.unmarked, numbersBingo}
  };

  let result = findFirstBingo(data, boards)
  let resultOrder = orderBingo(data, boards)
  console.log(`wynik : ${result.unmarked*result.numbersBingo.pop()}`);
  console.log(`wynik druga czesc : ${resultOrder.unmarked*resultOrder.numbersBingo.pop()}`);
};

bingo(data, parseBoard(boards));

