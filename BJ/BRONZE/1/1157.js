let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('');
let temp = {};

inputString.forEach((val) => {
    val = val.toLowerCase();
    if(temp[val]) {
        temp[val] = temp[val] + 1;
    } else {
        temp[val] = 1;
    }
})
let keys = Object.keys(temp);
let maxVal = '';
let max = 0;
keys.forEach((val,idx) => {
    if(max < temp[val]) {
        max = temp[val];
        maxVal = val;
    } else if(max === temp[val]) {
        maxVal = '?';
    }
})
console.log(maxVal.toUpperCase());