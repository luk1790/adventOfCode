var data = require("./data");
var numbers = data.data();
var lengthNumber = numbers.length;
for (var i = 0; i < lengthNumber; i++) {
  for (var j = i + 1; j < lengthNumber; j++) {
    for (var k = j + 1; k < lengthNumber; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        console.log("numbers %o - %o - %o", numbers[i], numbers[j], numbers[k]);
        console.log(numbers[i] * numbers[j] * numbers[k]);
      }
    }
  }
}
