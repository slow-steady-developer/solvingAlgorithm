let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let totalArr = inputString.map((row) => row.trim().split(""));
let max = 0;
totalArr.forEach((arr) => {
    max = (max <= arr.length) ? arr.length : max;
})
let result = "";
let start = 0;
while(start < max) {
    totalArr.forEach((arr) => {
        result += arr[start] || "";
    })
    start++;
}
console.log(result);