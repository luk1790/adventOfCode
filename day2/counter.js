var data = require("./data");
var pass = data.data();

let counter = 0;


let mapPassword = pass.map(val => {
  let data = val.split(' ');
  let numbers = data[0].split('-');
  return {
    numberMin: numbers[0],
    numberMax: numbers[1],
    letter:  data[1].replace(':', ''),
    password: data[2]
  }
});

mapPassword.forEach(val => {
  console.log('password: %o, letter: %o',val.password, val.letter);
  let stringMatch = new RegExp(val.letter, "g");
  let letterCount = (val.password.match(stringMatch) || []).length;
  console.log(letterCount);
  if(letterCount <= val.numberMax && letterCount >= val.numberMin){
    counter++;
  }
})

console.log('result: %o', counter)

