let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split(" ");
let num = Number(inputString[0]);
let [std, result, tmpNum, rest] = [Number(inputString[1]), [], 0, 0];

const createWithRadix = function(num) {
    tmpNum = Math.floor(num / std);
    rest = num % std;
    if(rest >= 10) rest = String.fromCharCode(rest + 55);
    result.unshift(rest);
    if(tmpNum > 0) {
        createWithRadix(tmpNum);
    }
}

createWithRadix(num);
console.log(result.join(""));