let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let convertFunc = (str) => { return str.split(' ').map(Number) };

const [n, m] = convertFunc(inputString[0]);
let numArr = new Array(n).fill(0).map((x,idx) => idx+1);
let changeFunc = (t1, t2) => {
    const oldT1Val = numArr[t1-1];
    const oldT2Val = numArr[t2-1];
    numArr[t1-1] = oldT2Val;
    numArr[t2-1] = oldT1Val;
}

for(let idx = 1; idx <= m; idx++) {
    const [changeT1, changeT2] = convertFunc(inputString[idx]);
    changeFunc(changeT1, changeT2);
}
console.log(numArr.join(' '));