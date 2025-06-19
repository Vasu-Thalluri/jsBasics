/*
primitive data types in javascript are number, string, boolean, null, undefined, symbol, bigint.
*/

console.log(null == null);
//Boolean: true or false.
var data = false;
if(data) {
    console.log("Say Hello");
} else {
    console.log("Say Good Bye")
}

// null. is an assignment value that means “no value”

var n = null;
console.log(n * 32);

// undefined. means a variable has not been declared, or has been declared but has not yet been assigned a value

var a;
console.log(a + 2);

// Number. 42 or 3.14159.

var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String. "Hey!"

var name = "Beau";
console.log("Hi! My name is " + name);

// Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2)
console.log(String(sym1) === String(sym2))

// Object - An object is a collection of properties, and a property is an association between a name (or key) and a value.

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);