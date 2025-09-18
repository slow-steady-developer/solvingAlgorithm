const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let time;

rl.on("line", function (line) {
    time = line.toString().trim().split(' ');
}).on("close", function () {
    let h = parseInt(time[0]);
    let m = parseInt(time[1]);

    if(m < 45){
        m += 60;
        if(h === 0){
            h = 24;
        }
        h -= 1
    }
    console.log(h + ' ' + (m-45));

    process.exit();
});