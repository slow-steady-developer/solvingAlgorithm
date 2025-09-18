let number = parseInt(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim());
let result = 0;
if(number % 4 === 0 && (number % 400 === 0 || number % 100 !== 0)){
    result = 1;
}
console.log(result);