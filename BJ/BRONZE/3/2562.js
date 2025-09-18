let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let originalnumbers = [];
let numbers = [];
inputString.forEach((num)=>{
    if(typeof num === 'string' && typeof parseInt(num) === 'number') {
        numbers.push(parseInt(num));
        originalnumbers.push(parseInt(num));
    }
})

numbers.sort((a,b) => a-b);
let lastnum = numbers[numbers.length - 1];
let idx = 0;
originalnumbers.some((num, oriIdx) => {
    idx = oriIdx;
    return(num === lastnum);
})

console.log(lastnum);
console.log(idx + 1);
