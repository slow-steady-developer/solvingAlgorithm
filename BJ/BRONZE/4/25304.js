let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let total = parseInt(numberString[0]);
let goodsCount = parseInt(numberString[1]);
let receiptTotal = 0;
let countAndPrice;
let result = 'No';
for(let idx = 2; idx <= 1 + goodsCount; idx++){
    countAndPrice = numberString[idx].trim().split(' ');
    receiptTotal += parseInt(countAndPrice[0]) * parseInt(countAndPrice[1]);
}

if(total === receiptTotal){
    result = 'Yes'
}
console.log(result);