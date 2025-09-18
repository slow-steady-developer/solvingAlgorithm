let number = parseInt(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim());
let result = 'F';
if(number >= 90){
    result = 'A';
}else if(number >= 80){
    result = 'B';
}else if(number >= 70){
    result = 'C';
}else if(number >= 60){
    result = 'D';
}
console.log(result);