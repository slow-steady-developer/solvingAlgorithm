let inputString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../../answerSheet.txt").toString().trim().split('\n');
let trynum = parseInt(inputString[0].trim());
let [caseArr, repeatNum, wordsArr, result, descNum] = [[], 0, [], '', 0];
for(let i = 1; i <= trynum; i++) {
    result = '';
    caseArr = inputString[i].split(" ");
    repeatNum = parseInt(caseArr[0].trim());
    wordsArr = caseArr[1].split('');
    wordsArr.forEach((char) => {
        descNum = repeatNum;
        while(descNum-- > 0) {
            result += char;
        }
    })
    console.log(result);
}