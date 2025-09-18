let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let numbers;
let result = 0;
for(let idx = 0; idx < numberString.length; idx++){
    numbers = numberString[idx].trim().split(' ');
    result = parseInt(numbers[0]) + parseInt(numbers[1]);
    console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}