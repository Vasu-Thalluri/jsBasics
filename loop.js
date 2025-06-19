for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("---------------");

var sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}
console.log(sum);
console.log("---------------");

let x = 0
do {
    x++;
    console.log(x);
} while (x <= 2);
console.log("----------------");

let i = 0;
let prod = 1;
while (i <= 4) {
    i++;
    prod *= i;
    //console.log(product);
}
console.log(prod)
console.log("----------------");

let n = 1;
let product = 1;
while (n <= 4) {
    product *= n;
    n++;
    //console.log(product);
}
console.log(product);
console.log("-----------------");

let num = 1;
while (num <= 9) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

function repeatedChar(str){
    let repeatedChar = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if(char === str[j]){
                count++;
            }
        }
        //console.log(`${char}: ${count}`);
        if(count > 1 && !repeatedChar.includes(char)){
            repeatedChar.push(char);
        }
    }
    //console.log(repeatedChar)
    return repeatedChar.join("")
}
let str = "virinchi";
console.log(`Repetitive characters in "${inputStr}" are: "${repeatedChar(str)}".`);
