let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let [n,m] = inputString[0].split(' ').map(Number);
let numberBox = new Array(n).fill(1).map((x,i) => x + i);

let [start, oldval] = [1,0];
while(start <= m) {
    let [i,j] = inputString[start++].split(' ').map(Number);
    numberBox.forEach(function(num, idx) {
        if(idx >= i-1 && idx <= (i-1 + j-1) / 2) {
            oldval = numberBox[idx];
            numberBox[idx] = numberBox[i + j - 2 - idx];
            numberBox[i + j - 2 - idx] = oldval;
        } 
    })
}
console.log(numberBox.join(' '));