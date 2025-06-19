let person = {
    name: "John",
    age: 26,
    city: "wellington"
}

console.log(person);
console.log("------------------");

let personName = person.name; //Accessing
console.log(personName);
console.log("------------------");

let person_Name = person["name"]; //Accessing
console.log(person_Name);
console.log("------------------");

person["occupation"] = "student"; //Inserting
console.log(person.occupation);
console.log("------------------");

person.isLogedIn = true; //Inserting
console.log(person.isLogedIn);
console.log("------------------");

console.log(person);
console.log("------------------");

person["printInfo"] = function(){
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
}// Inserting a function or method.
person.printInfo();
console.log("------------------");

console.log(person);
console.log("------------------");

let strObj = JSON.stringify(person); // Converting an object into pure string.
console.log(strObj);
console.log(strObj.name); //undefined. we are trying to access the name property on a string, which doesn't work because JSON.stringify returns a string, not an object.
console.log("------------------");

let parseObj = JSON.parse(strObj);// Converting a string into pure javascript object.
console.log(parseObj);
console.log(parseObj.name);
console.log("------------------");

console.log(person);