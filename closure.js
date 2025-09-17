//A closure gives you permission to access an outer function's scope from an inner function.

function outer(){
    let x = 10;
    function inner(y){
        return x + y;
    }
    return inner;
}

let add = outer();
console.log(add(2));


function counter(){
    let count = 0;
    function increment(){
        count++
        console.log(count);
    }
    return increment;
}

let increase = counter();
increase();
increase();

function multiplyer(x){
    function inner(y){
        return x * y;
    }
    return inner;
}
let double = multiplyer(2);
let triple = multiplyer(3);
console.log(double(5));
console.log(triple(5));

//closure scope chain
var userName = 'vasu';
function makeFunc(){
    var name = 'mozilla';
    function displayName(num){
        console.log(name, num, userName);
    }
    return displayName;
}
var closure = makeFunc();
closure(5);

var d = 15;
function chainScope(){
    return function(a){ //anonymous function
        return function(b){ //anonymous function
            return function(c){ //anonymous function
                console.log(a+b+c+d)
            }
        }
    }
}
chainScope()(1)(5)(10);

//this below part tell about block scope and shadowing.
let count = 0;
(function printCount(){
    if(count===0){
        let count = 1; //shadowing
        console.log(count);
    }
    console.log(count);
})();

//write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10); //returns 16;
// addSix(21); //returns 27;
function createBase(base = 6){
    return function addBaseToNum(num){
        console.log(base + num);
    }
}
var result = createBase();
result(6);
result(10);

//Time optimization
function find(){
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * 1;
    }
    return function (index){
        console.log(a[index]);
    }
}
const closureFunc = find();
console.time("6");
closureFunc(6);
console.timeEnd("6");
console.time("12");
closureFunc(12);
console.timeEnd("12");

//bock scope and setTimeout
function a(){
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i); //what is logged when variable is declared with var and let.
        }, i * 1000);
    }
}
a(); //output with var 3,3,3; with let 0,1,2;

//with closure we can print 0,1,2 with variable var
for (var i = 0; i < 3; i++) {
    function inner(i){
        setTimeout(() => {
            console.log(i); //what is logged when variable is declared with var and let.
        }, i * 1000);
    }
    inner(i);
}

//How would you use a closure to create a private counter?
function privateCounter() {
    var _counter = 0;
    function add(increment) {
        _counter += increment;
    }
    function retrive() {
        return "Counter = " + _counter;
    }
    return {add, retrive};
}

const c = privateCounter();
c.add(5);
c.add(5);
console.log(c.retrive());

//what is module pattern?

var Module = (function() {
    function privateMethod() {
        console.log("priavte");
    }
    return {publicmethod: function() {
        console.log("public");
    }}
})();
Module.publicmethod();
//Module.privateMethod();

//task: Make this run only once
// let view;
// function likeTheVideo() {
//     view = "Roadside Coder";
//     console.log("Subscribe to", view);
// }

let view;
function likeTheVideo() {
    let called = 0;
    return function() {
        if(called > 0) {
            console.log("Already Subscribed to this youtube channel");
        } else {
            view = "vasu@YT";
            console.log("Subscribe to", view);
            called++;
        }
    }
}
let channel = likeTheVideo();
channel();
channel();
channel();

//Once polyfill
function once(func, context) {
    let ran;
    return function() {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    };
}
const hello = once((a, b) => console.log("hello", a, b));
hello(1,2);

//implementing caching/memoize function
