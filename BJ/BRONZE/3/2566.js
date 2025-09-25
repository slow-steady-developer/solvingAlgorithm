let numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split("\n");
let num81 = numbers.map((row) => row.trim().split(" ").map(Number));
let [max, n, m] = [0, 0, 0];
for(let i = 0; i < num81.length; i++) {
    for(let j = 0; j < num81[i].length; j++){
        if(max <= num81[i][j]) {
            n = i+1;
            m = j+1;
            max = num81[i][j];
        }
    }
}
console.log(max);
console.log(n, m);