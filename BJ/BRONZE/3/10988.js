let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('');
let length = inputString.length;
let result = 1;
inputString.some((char, idx) => {
    if(idx < length/2) {
        if(char === inputString[length - 1 - idx]) {
            return false;
        } else {
            result = 0;
        }
    }
})
console.log(result);