let numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split(" ");
let checker = parseInt(numbers[0]) - parseInt(numbers[1]);
let result = '';
if(checker > 0){
    result = '>';
}else if(checker === 0){
    result = '==';
}else{
    result = '<';
}
console.log(result);