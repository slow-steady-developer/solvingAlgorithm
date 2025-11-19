let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split(" ");
let numbers = inputString[0].split("");
let [std, result, tmpNum] = [parseInt(parseInt(inputString[1])), 0, 0];
numbers.forEach(function(num,idx,arr){
    if(isNaN(parseInt(num))) {
        tmpNum = num.charCodeAt(0)-55
    } else {
        tmpNum = parseInt(num);
    }
    result += tmpNum * Math.pow(std,arr.length - idx -1);
})
console.log(result);
