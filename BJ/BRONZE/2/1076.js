const colorInput = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split("\n");
const colorObject = {
    black : 0,
    brown : 1,
    red : 2,
    orange : 3,
    yellow : 4,
    green : 5,
    blue : 6,
    violet : 7,
    grey : 8,
    white : 9
}
let multipleResult = 0;
let solution = (_number_) => {
    if(_number_ > 0){
        multipleResult = 10 * multipleResult
        solution(--_number_);
    }
}
multipleResult = parseInt(colorObject[colorInput[0].trim()] + '' + colorObject[colorInput[1].trim()]);
solution(colorObject[colorInput[2].trim()]);
console.log(multipleResult);

