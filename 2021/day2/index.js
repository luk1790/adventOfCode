var data = require(`./data.json`);

const parseData = (data) => {
  return data.map(value => value.split(' '))
}

const calculatePosition = (data) => {
  let coords = {horizontal: 0, depth: 0};

  data.forEach(element => {
    switch (element[0]) {
      case 'forward':
        coords.horizontal += parseInt(element[1])  
        break;
      case 'down':
        coords.depth += parseInt(element[1])  
        break;
      case 'up':
        coords.depth -= parseInt(element[1])  
        break;
    
      default:
        break;
    }
  });

  return coords;
}
const calculatePositionWitAim = (data) => {
  let coords = {horizontal: 0, depth: 0, aim: 0};

  data.forEach(element => {
    switch (element[0]) {
      case 'forward':
        coords.horizontal += parseInt(element[1])  
        coords.depth += coords.aim*parseInt(element[1])
        break;
      case 'down':
        coords.aim += parseInt(element[1])  
        break;
      case 'up':
        coords.aim -= parseInt(element[1])  
        break;
    
      default:
        break;
    }
  });

  return coords;
}

let result = calculatePosition(parseData(data));
let result2 = calculatePositionWitAim(parseData(data));


console.log(`wynik : ${result.depth*result.horizontal}`);
console.log(`wynik druga czesc : ${result2.depth*result2.horizontal}`);
