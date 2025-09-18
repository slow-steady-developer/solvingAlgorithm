let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim();
let checkingArr = new Array(26).fill(-1);
for(let idx = 0; idx < inputString.length; idx++) {
    if(checkingArr[inputString.charCodeAt(idx) - 'a'.charCodeAt(0)] === -1) checkingArr[inputString.charCodeAt(idx) - 'a'.charCodeAt(0)] = idx
}
console.log(checkingArr.join(' '));