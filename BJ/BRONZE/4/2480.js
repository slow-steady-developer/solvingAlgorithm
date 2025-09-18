let diceResult = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split(' ');
let diceObj = {};
let result;
let firstGroup, secondGroup;
let first, second, third;
for(let i = 0; i < diceResult.length; i++){
    if(diceObj[diceResult[i]] === undefined){
        diceObj[diceResult[i]] = 1;
    }else{
        diceObj[diceResult[i]] += 1;
    }
}

switch(Object.keys(diceObj).length){
    case 1:
        result = 10000 + parseInt(Object.keys(diceObj)[0]) * 1000;
        break;
    case 2:
        firstGroup = Object.entries(diceObj)[0];
        secondGroup = Object.entries(diceObj)[1];
        let finalNum;
        
        if(parseInt(firstGroup[1]) > parseInt(secondGroup[1])){
            finalNum = parseInt(firstGroup[0]);
        }else{
            finalNum = parseInt(secondGroup[0]);
        }
        result = 1000 + finalNum * 100;
        break;
    default:
        first = parseInt(Object.keys(diceObj)[0]);
        second = parseInt(Object.keys(diceObj)[1]);
        third = parseInt(Object.keys(diceObj)[2]);
        let lastOne;
        if(first > second){
            if(third > first){
                lastOne = third;
            }else{
                lastOne = first;
            }
        }else{
            if(third > second){
                lastOne = third;
            }else{
                lastOne = second;
            }
        }
        result = lastOne * 100;
        break;

}

console.log(result);