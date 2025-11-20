let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split("\n");
let count = Number(inputString[0].trim());

let start = 1;
let targetNum = 0;
let result = ""
let resultArr = [];
while(start <= count) {
    result = "";
    targetNum = Number(inputString[start].trim());
    result += Math.floor(targetNum / 25);
    targetNum = targetNum % 25;
    result += " " + Math.floor(targetNum / 10);
    targetNum = targetNum % 10;
    result += " " + Math.floor(targetNum / 5);
    targetNum = targetNum % 5;
    result += " " + targetNum;
    resultArr.push(result);
    ++start;
}

console.log(resultArr.join("\n"));