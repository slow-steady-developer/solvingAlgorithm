let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let numbers = inputString.map(Number);
let [extra, extraObj] = [0, {}];
numbers.forEach(function(num){
    extra = num%42;
    if(!extraObj[extra]) extraObj[extra] = [];
    extraObj[extra].push(0);
})
console.log(Object.keys(extraObj).length);