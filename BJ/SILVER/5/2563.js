let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split("\n");
let squares = {};

const drawDots = function(x,y) {
    let location;
    for(let idx = 0; idx < 10; idx++) {
        for(let idy = 0; idy < 10; idy++) {
            location = (x + idx) + "_" + (y + idy);
            if(!squares[location]) squares[location] = true;
        }
    }
}

inputString.forEach(function(pair,idx){
    if(idx !== 0) {
        const coordination = pair.trim().split(" ").map(Number);
        drawDots(coordination[0], coordination[1]);
    }
})

console.log(Object.keys(squares).length);
