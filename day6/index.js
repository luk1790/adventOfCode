var fs = require("fs");

var downloadFile = (fileName) => {

  let charCount = (str, letter) =>
  {
   var letter_Count = 0;
   for (var position = 0; position < str.length; position++) 
   {
      if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
  }
  

  var parseData = (data) => {
    let splitData = data.split(/\n\n/);
    // console.log(splitData);
    splitData = splitData.map((val) => {
      return val.replace(/\n/g, "");
    });
    // console.log(splitData);

    let result = splitData.map((element) => {
      return element.split("").filter((val, index, self) => {
        return self.indexOf(val) === index;
      });
    });

    console.log('Result is %o', result.reduce((acc, val) => acc + val.length, 0));
  };
  var parseData2 = (data) => {
    let counter = [];
    let splitData = data.split(/\n\n/);
    splitData = splitData.map((val) => {
      return val.split(/\n/);
    });


    splitData.forEach(val => {
      let answersCount = val.length;
      val[0].split('').forEach(element=> {
        let numberChar = charCount(val.join(''), element);
        // console.log('%o -%o - %o', val, element, numberChar)
        if(answersCount === numberChar){
          counter.push({answer: val.join(''), letter: element})
        }
      })
      
    })

    console.log(counter)
    console.log('Repeat answers count is %o', counter.length)
  };

  fs.readFile(
    `/home/lukasz/Projects/adventOfCode/day6/${fileName}`,
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      parseData(data);
      parseData2(data)
    }
  );
};

downloadFile("data.txt");
// downloadFile("test.txt");
