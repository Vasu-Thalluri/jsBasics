const { error } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout,
});

function askFirstNumber(){
    rl.question("Enter x value:", (x)=>{
        askSecondNumber(x);
    })
}

function askSecondNumber(x){
    rl.question("Enter y value:",(y)=>{
        processNumbers(x, y);
    })
}

function processNumbers(x, y) {
    //let num = prompt("Enter a number");
    try {
        console.log("x value:", x);
        console.log("y value:", y);

        if(y == 0){
            throw new Error('y must be greater than zero');
        }
        let result = x / y;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close();
    }
};
askFirstNumber();