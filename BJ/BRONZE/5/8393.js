let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim();
let number = parseInt(numberString);
console.log(number * (number + 1) / 2);