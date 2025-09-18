let [n,number] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let [total, start] = [0,0];
while(start < n) { total += parseInt(number[start++]); }
console.log(total);