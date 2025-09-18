let numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split(" ");
numbers[0] = parseInt(numbers[0]);
numbers[1] = parseInt(numbers[1]);
console.log(numbers[0] - numbers[1]);