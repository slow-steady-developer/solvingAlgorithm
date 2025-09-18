let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
//let inputString = require('fs').readFileSync(process.platform === "linux" ? "/workspaces/algorithm/BJ/answerSheet.txt" : "../../answerSheet.txt").toString().trim().split('\n');
let students = new Array(30).fill(false);
let doneStudents = inputString.map(Number);
doneStudents.forEach((val)=>{
    students[val-1] = true;
})
let notPass = [];
students.forEach((val,idx)=>{
    if(!val) notPass.push(idx+1);
})
console.log(notPass[0])
console.log(notPass[1])