let name = "John";
let result = name ? "hello " + name : "Hello, stranger";
console.log(result);

let isLoggedIn = 0;
let userStatus = isLoggedIn ? "Welcome back!" : "Please log in to continue";
console.log(result + " " + userStatus);

let age = 20;
let elgibility = age >= 18 ? "Adult" : "Child";
console.log(elgibility);