let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let nAndMString = inputString[0].split(' ');
let n = 0, m = 0;
nAndMString.forEach((text, idx)=>{
    switch(idx) {
        case 0 : n = parseInt(text.trim()); break;
        case 1 : m = parseInt(text.trim()); break;
    }
})

let numberBox = [];
for(let idx = 1; idx <= n; idx++) {
    numberBox.push(0);
}

let orderArr, startNum, endNum, injectionNum;
let injectBall = function(order) {
    orderArr = order.split(' ');
    startNum = parseInt(orderArr[0].trim());
    endNum = parseInt(orderArr[1].trim());
    injectionNum = parseInt(orderArr[2].trim());
    numberBox.forEach((val, idx) => {
        if(idx >= startNum-1 && idx <= endNum-1) {
            numberBox[idx] = injectionNum;
        }
    })
}

for(let mIdx = 1; mIdx <= m; mIdx++) {
    injectBall(inputString[mIdx]);
}

console.log(numberBox.join(' '));