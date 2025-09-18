let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let stringNumbers = inputString[1].trim().split(' ');
let originalNumbers = [];
let numbers = [];

stringNumbers.forEach((text) => {
    originalNumbers.push(parseInt(text));
    numbers.push(parseInt(text));
});

// 시간초과로 정답은 냈지만... 난 아래 버블링 로직이 더좋네..
// numbers.sort((a,b) => a-b);
// console.log(numbers[0] + ' ' + numbers[numbers.length-1]);

let sortfunction = function(num) {
    let targetIdx = findIndex(num);
    let changeTargetIdx = null;
    numbers.some((targetNum, idx) => {
        if(targetIdx === idx) return false;
        changeTargetIdx = idx;
        return (num <= targetNum);
    })
    numberArrChange(targetIdx, changeTargetIdx);
}

let findIndex = function(targetNum) {
    let resultIdx = null;
    numbers.some((num, idx) => {
        resultIdx = idx;
        return (num === targetNum);
    })
    return resultIdx;
}

let numberArrChange = function(moveIdx, targetIdx) {
    if(moveIdx === null || targetIdx === null) return;

    let tobemoved = numbers.splice(moveIdx, 1);
    numbers.splice(targetIdx,0,tobemoved);
}

originalNumbers.forEach((num) => {
    sortfunction(num);
});

console.log(numbers);
console.log(numbers[0] + ' ' + numbers[numbers.length-1]);
