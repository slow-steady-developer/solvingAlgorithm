let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let targetNumber = numberString[0].trim().split(' ')[1];
let numbers = numberString[1].trim().split(' ');
let result = '';
for(let idx = 0; idx < numbers.length; idx++){
    if(targetNumber > parseInt(numbers[idx])){
        result += numbers[idx] + ' ';
    }
}
console.log(result.trim());