var data = require("./data");
var pass = data.data();

let counter = 0;
let counterSpec = 0;

let mapPassword = pass.map((val) => {
  let data = val.split(" ");
  let numbers = data[0].split("-");
  return {
    numberMin: numbers[0],
    numberMax: numbers[1],
    letter: data[1].replace(":", ""),
    password: data[2],
  };
});

mapPassword.forEach((val) => {
  // console.log("password: %o, letter: %o", val.password, val.letter);
  let stringMatch = new RegExp(val.letter, "g");
  let letterCount = (val.password.match(stringMatch) || []).length;
  // console.log(letterCount);
  if (letterCount <= val.numberMax && letterCount >= val.numberMin) {
    counter++;
  }

  if (
    (val.password[val.numberMin-1] === val.letter &&
      val.password[val.numberMax-1] !== val.letter) ||
    (val.password[val.numberMin-1] !== val.letter &&
      val.password[val.numberMax-1] === val.letter)
  ) {
    console.log("password: %o, letter: %o, position %o - %o", val.password, val.letter, val.numberMin, val.numberMax);
    counterSpec++
  }
});

console.log("result: %o", counter);
console.log("result 2: %o", counterSpec);
