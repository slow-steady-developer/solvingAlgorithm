let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let count = parseInt(numberString[0]);
let numbers;
for(let idx = 1; idx <= count; idx++){
    numbers = numberString[idx].trim().split(' ');
    console.log('Case #' + idx + ': ' + numbers[0] + ' + ' + numbers[1] + ' = ' + (parseInt(numbers[0]) + parseInt(numbers[1])));
}