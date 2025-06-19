let a = 5;
let b = 10;
let c = 15;
console.log(a < b && b < c); // true
console.log(a > b || b > c); // false
console.log(!(a == b)); // true
console.log("---------------------");

let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);
console.log("--------------------");

console.log(true && (false || true));
console.log((true && false) || (false || true));
console.log((true || false) && !(true && false));
console.log(!(true && false) || (false && true));
console.log((true && !false || false && !true));
console.log(!(true || false) && !(false && true));
console.log("--------------------");

let num = 11;
if(num % 2 == 0){
    let result = true;
    console.log(result);
}else{console.log(false)};

let x = 10;
let y = "11";
if(x == y){
    console.log(true);
}else{console.log(false);}