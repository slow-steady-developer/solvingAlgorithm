let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim();
let [start, end] = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

let [result, count] = [{},0];
while(start <= end) {
    if(start >= 'S'.charCodeAt(0)) {
        result[String.fromCharCode(start)] = Math.floor((start-66) / 3) + 2;
        if(start === end)  result[String.fromCharCode(start)] = 9;
    } else {
        result[String.fromCharCode(start)] = Math.floor((start-65) / 3) + 2;
    }
    start++;
}

for(let i = 0; i < inputString.length; i++) {
    count += result[inputString.charAt(i)] + 1;
}
console.log(count);