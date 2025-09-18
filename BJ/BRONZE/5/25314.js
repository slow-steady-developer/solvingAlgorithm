let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim();
let number = parseInt(numberString);
let longCount = number / 4;
let longString = '';
for(let idx = 0; idx < longCount; idx++){
    longString += 'long ';
}
console.log(longString + 'int');
