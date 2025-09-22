let number = parseInt(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim());
let result = [];
let start = 1;
while(start <= number) {
    result.push(" ".repeat(number-start) + "*".repeat(start*2 - 1));
    start++;
}

let last = result.length - 1;
while(last > 0) {
    result.push(result[--last]);
}
console.log(result.join('\n'));