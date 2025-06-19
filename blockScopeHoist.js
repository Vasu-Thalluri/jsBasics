/*
console.log(myVar);
var myVar = 2;
console.log("--------");
*/

/*
myVar = 2; 
console.log(myVar);
var myVar;
console.log("--------");
*/


//global scope
//console.log(x); //Cannot access 'x' before initialization(Hoisting)
const x = 3;
//const x = 4; //Cannot redeclare block-scoped variable 'x' Uncaught SyntaxError: Identifier 'x' has already been declared
{
    console.log(x);
    {
        //local scope
        // console.log(x); //Cannot access 'x' before initialization.
        const x = 3; //we can redeclare same variable(block-scoped) name(x) in a block level. but we cannot access before initial.
        console.log(x);
    }
    console.log(x);
}
console.log(x);
console.log("--------");



// global scope
const i = 10;
{
  // local scope
  console.log(i);
  //const i = 20; //Cannot access 'i' before initialization
  let j = 20; //(this b is block scoped variable)
  console.log(i + j);
}
//console.log(i + j); // ReferenceError: j is not defined. we can't access block level(local scope) variables(let, const) out of the scope.
console.log("--------");



//global scope
let y = 1;
//let y = 2 //Cannot redeclare block-scoped variable 'y' Uncaught SyntaxError: Identifier 'y' has already been declared
{
    //local scope
    console.log(y);
    {
        //console.log(y); //Cannot access 'y' before initialization.
        let y = 3; //we can redeclare same variable(block-scoped) name(y) in a block level. but we cannot access before initial.
        console.log(y);
    }
    console.log(y);
}
console.log(y);
console.log("--------");



// global scope
let a = 10;
{
  // local scope
  console.log(a);
  //let a = 20; //Cannot access 'a' before initialization
  let b = 20; //(this b is block scoped variable)
  console.log(a + b);
}
//console.log(a + b); // ReferenceError: b is not defined. we can't access block level(local scope) variables(let, const) out of the scope.
console.log("--------");

 

console.log(c); //undefned
var c = 1;
{
    console.log(c); //we won't get error here while we accessing same variable in a block level beacause var variables are global variables.
    var c = 2;
    {
        console.log(c);
        var c = 3;
        console.log(c);
    }
    console.log(c);
}
console.log(c);
console.log("--------");    


//we can access the global variables entire programm without getting error.