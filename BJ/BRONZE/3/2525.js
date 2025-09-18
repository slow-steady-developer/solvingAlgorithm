const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentAndTime = [];

rl.on("line", function (line) {
    currentAndTime.push(line);
    time = line.toString().trim().split(' ');
}).on("close", function () {
    let current = currentAndTime[0].toString().trim().split(' ');
    let time = parseInt(currentAndTime[1].toString().trim());

    let h = parseInt(current[0]);
    let m = parseInt(current[1]);

    let fulltime = h * 60 + m + time;
    let calculatedTime = fulltime % 1440;
    let resultH = Math.floor(calculatedTime / 60);
    let resultM = calculatedTime % 60;

    console.log(resultH + ' ' + resultM);

    process.exit();
});