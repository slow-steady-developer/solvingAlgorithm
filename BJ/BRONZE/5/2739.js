let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim();
let number = parseInt(numberString);
for(let idx = 1; idx < 10; idx++){
    console.log(number + ' * ' + idx + ' = ' + number*idx);
}
