//Prototypal inheritance
/*
Definition: Prototypal inheritance is a feature in JavaScript where objects inherit properties and methods directly from other objects. This is achieved through the prototype chain.

Key Features:

Objects Inherit from Objects: In prototypal inheritance, objects can directly inherit from other objects.
Dynamic Inheritance: The prototype chain can be modified at runtime, allowing for dynamic inheritance.
Prototype Chain: Objects have a special property called __proto__ (or [[Prototype]] in the specification) that points to their prototype object.
Delegation: If a property or method is not found on an object, JavaScript looks up the prototype chain to find it.
*/

/*
//my understanding level
function animal(name){
    this.name = name;
    function speak(){
        console.log("Animal Sound");
    }
    speak();
}
let myAnimal = new animal("Lion");
console.log(myAnimal);
*/
/*
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log("Roar...");
}
//console.log(Animal.prototype);

let myAnimal = new Animal("Lion");
console.log(myAnimal.name);
myAnimal.speak();
*/

// function Animal(legs){
//     this.legs = legs;
// }
// let myAnimal2 = new Animal("Lion legs");
// console.log(myAnimal2.legs);

/*
//my understanding level
function Dog(breed){
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function (){console.log("Bark")};
//console.log(Dog.prototype);

let myDog = new Dog("Asiatic Lion");
console.log(myDog.breed);
myDog.speak();
myAnimal.speak();
*/
/*
function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
//Dog.prototype = Object.create(Animal.prototype);
//Dog.prototype.constructor = Dog;

Dog.prototype.speak = function(){
    console.log("Bark");
}

let myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.name);
console.log(myDog.breed);
myDog.speak();
*/

function Animal(carnivoreName){
    //this.name = carnivoreName
    this.carnivoreName = carnivoreName;
}
Animal.prototype.roar = function(){
    console.log(`${this.carnivoreName} makes a sound like Roar...`);
}

// Constructor function Dog that inherits from Animal
function Dog(omnivoreName){
    Animal.call(this, "Lion"); // Call the Animal constructor with this context
    //this.name = omnivoreName; //Override the name property
    this.omnivoreName = omnivoreName; //// Initialize the omnivoreName property
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.constructor = Dog; // Set the constructor property to Dog

Dog.prototype.bark = function(){
    console.log(`${this.omnivoreName} makes a sound like Bark`);
}

// let myAnimal = new Dog("Golden Retriever");
// console.log(myAnimal.carnivoreName)
// console.log(myAnimal.omnivoreName);
// myAnimal.roar();
// myAnimal.bark();

/*
//Prototype Chain Visualization
myAnimal
  |
  |__ carnivoreName: "Lion"
  |__ omnivoreName: "Golden Retriever"
  |
  |__ proto (__proto__)
        |
        |__ bark: function() {...}  (Dog.prototype)
        |__ constructor: function Dog() {...}
        |
        |__ proto (__proto__)
              |
              |__ roar: function() {...}  (Animal.prototype)
              |__ constructor: function Animal() {...}
              |
              |__ proto (__proto__)
                    |
                    |__ Object.prototype
                          |
                          |__ toString: function() {...}
                          |__ hasOwnProperty: function() {...}
                          |__ ...
                          |
                          |__ proto (__proto__)
                                |
                                |__ null
*/

Animal.prototype.walk = function(){
    console.log(`${this.carnivoreName} is walking`);
}
Dog.prototype.walk = function(){
    console.log(`${this.omnivoreName} is walking`);
    Animal.prototype.walk.call(this);
}

// Adding a static method to the Animal constructor function
Animal.info = function(){
    //console.log(`This is a ${this.carnivoreName}`); //undefined
    console.log(`This is a lion`);
}

// Adding a static method to the Dog constructor function
Dog.info = function(){
    //console.log(`This is a ${this.omnivoreName}`) //undefined
    console.log(`This is a Golden Retriever`);
}

// Adding a static method to the Animal constructor function
Animal.info = function(animalInstance){
    if(animalInstance instanceof Animal){
        console.log(`this is a ${animalInstance.carnivoreName}`);
    }else{
        console.log("This is an animal");
    }
}

// Adding a static method to the Dog constructor function
Dog.info = function(animalInstance){
    if(animalInstance instanceof Dog){
        console.log(`this is a ${animalInstance.omnivoreName}`);
    }else{
        console.log("This is a dog");
    }
}

let myAnimal = new Dog("Golden Retriever");
myAnimal.walk();

Animal.info();
Dog.info();
Animal.info(myAnimal);
Dog.info(myAnimal);