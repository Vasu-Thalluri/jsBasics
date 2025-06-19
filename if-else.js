const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
/*
rl.question("Enter a number: ", (num) => {
    console.log("You entered:", num);

    if(num > 0){
        console.log("Positive");
    }else {
        console.log("Negative");
    }
    rl.close();
});
*/

rl.question("Enter a number: ", (num) => {
    //let num = prompt("Enter a number");
    console.log("You entered:", num);
    if(num == null){
        console.log("null");
    } else if(num == undefined) {
        console.log("undefined");
    } else {
        console.log(num);
    }
    rl.close();
});

/*
document.getElementById("test").addEventListener("click", function(){
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });
    rl.question("Enter a number: ", (num) => {
        //let num = prompt("Enter a number");
        console.log("You entered:", num);
        if(num == null){
            document.getElementById("result").innerHTML = "it is null";
        } else if(num == undefined) {
            document.getElementById("result").innerHTML = "it is undefined";
        } else {
            document.getElementById("result").innerHTML = num;
        }
        rl.close();
    });
})
*/

let x = "hello";
if(x){
    console.log("true");
}else{
    console.log("false");
}