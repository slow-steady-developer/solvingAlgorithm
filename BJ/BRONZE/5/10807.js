let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let numbers = numberString[1].trim().split(' ');
let targetNumber = parseInt(numberString[2]);
let count = 0;
for(let idx = 0; idx < numbers.length; idx++){
    if(targetNumber === parseInt(numbers[idx])){
        count += 1;
    }
}
console.log(count);