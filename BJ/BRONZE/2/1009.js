const numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split("\n");
const numberObject = {
    1 : [1],
    2 : [2,4,8,6],
    3 : [3,9,7,1],
    4 : [4,6],
    5 : [5],
    6 : [6],
    7 : [7,9,3,1],
    8 : [8,4,2,6],
    9 : [9,1],
    0 : [10]
}
let numberStrings;
let number_a;
let number_b;
let selectedNumberObject;
let remainder;
let remainderForUse;
let solution = (numberString) => {
    numberStrings = [];
    numberStrings = numberString.split(" ");
    number_a = parseInt(numberStrings[0]);
    number_b = parseInt(numberStrings[1]);
    selectedNumberObject = numberObject[number_a % 10];
    remainder = number_b % selectedNumberObject.length;
    if(remainder === 0) {
        remainderForUse = selectedNumberObject[selectedNumberObject.length - 1];
    }else{
        remainderForUse = selectedNumberObject[remainder-1];
    }

    console.log(remainderForUse.toString().trim());
}
if(numbers[0] > 0){
    for(let idx_1 = 1; idx_1 <= numbers[0]; idx_1++){
        solution(numbers[idx_1]);
    }
}