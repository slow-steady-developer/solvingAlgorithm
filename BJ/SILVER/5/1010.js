const numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split("\n");
let numberStrings;
let number_a;
let number_b;
let factorialA;
let factorialB;
let factorialBmA;
let solution = (numberString) => {
    numberStrings = [];
    numberStrings = numberString.split(" ");
    number_a = parseInt(numberStrings[0]);
    number_b = parseInt(numberStrings[1]);

    factorialA = factorial(number_a);
    factorialB = factorial(number_b);
    factorialBmA = factorial(number_b - number_a);

    console.log(Math.round(factorialB / (factorialA * factorialBmA)));
}
let factorial = (targetNumber) => {
    let returnNumber = 1;
    if(targetNumber > 0){
        for(let fIdx = 1; fIdx <= targetNumber; fIdx++){
            returnNumber = returnNumber * fIdx;
        }
    }
    return returnNumber;
}
if(numbers[0] > 0){
    for(let idx_1 = 1; idx_1 <= numbers[0]; idx_1++){
        solution(numbers[idx_1]);
    }
}