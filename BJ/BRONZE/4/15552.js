let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let count = parseInt(numberString[0]);
let numbers;
let result = '';
for(let idx = 1; idx <= count; idx++){
    numbers = numberString[idx].trim().split(' ');
    result += parseInt(numbers[0]) + parseInt(numbers[1]) + '';
    if(idx !== count){
        result += '\n';
    }
}
console.log(result);