let numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split(" ").map(Number);
let answer = [1,1,2,2,2,8];
let result = [];
numbers.forEach((num,idx) => {
    result.push(answer[idx] - num);
})
console.log(result.join(' '));