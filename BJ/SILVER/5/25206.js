let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let scoreMap = { 'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0 };
let totalPoint = 0;
let totalSubjectPoint = 0;
let calculateScore = function(scoreInfo) {
    let information = scoreInfo.split(" ");
    if(information[2] !== 'P') {
        totalSubjectPoint += parseInt(information[1]);
        totalPoint += parseInt(information[1]) * scoreMap[information[2].trim()];
    }
}
inputString.forEach((scoreInfo) => {
    calculateScore(scoreInfo);
})

console.log(totalPoint/totalSubjectPoint);