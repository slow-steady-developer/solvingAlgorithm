let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim();
let croatic = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let [a, z] = [97,122];
let analyticResult = 0;

let repeatedReturn = function(char) {
    if(inputString.indexOf(char) > -1) {
        inputString = inputString.replace(char, " ");
        ++analyticResult;
        repeatedReturn(char);
    }
}

croatic.forEach((char) => repeatedReturn(char));

if(inputString.trim() !== "") {
    while(a <= z) {
        repeatedReturn(String.fromCharCode(a));
        a++;
    }
    console.log(analyticResult);
} else {
    console.log(analyticResult);
}