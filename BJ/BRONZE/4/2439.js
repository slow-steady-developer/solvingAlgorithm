let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim();
let count = parseInt(numberString);
let result = '';
for(let idx = 1; idx <= count; idx++){
    for(let numberIdx_1 = 1; numberIdx_1 <= count-idx; numberIdx_1++){
        result += ' ';
    }
    for(let numberIdx_2 = 1; numberIdx_2 <= idx; numberIdx_2++){
        result += '*';
    }
    console.log(result);
    result = '';
}
