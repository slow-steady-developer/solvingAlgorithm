let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let numbers = inputString[1].split(' ').map(Number);
numbers.sort((a,b)=>a-b);
let max = numbers[numbers.length - 1];
let total = 0;
numbers.forEach((num) =>total = total + num);
console.log(total * 100 / max / numbers.length)