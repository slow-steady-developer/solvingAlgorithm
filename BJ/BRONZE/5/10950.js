let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let numbers;
for(let idx = 1; idx <= parseInt(numberString[0]); idx++){
    numbers = numberString[idx].trim().split(' ');
    console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}