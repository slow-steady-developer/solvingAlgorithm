let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim();
let count = parseInt(numberString);
let idx = 1;
let result = '';
while(idx <= count){
    result += '*';
    console.log(result);
    idx++;
}
