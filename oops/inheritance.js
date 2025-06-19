//Inheritance is a mechanism in which a new class is created using an existing class as a base, and it inherits all the properties and methods of the base class.
class ShapeName {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    getDescription() {
        return `This is a ${this.color} ${this.name}.`;
    }
}

class Rectangle extends ShapeName {
    constructor(color, length, breadth) {
        super(color, "Rectangle");
        this.length = length;
        this.breadth = breadth;
    }
    getDescription() {
        //Call the parent class's getDescription method
        const parentDescription = super.getDescription();
        return `${parentDescription} It has a length of ${this.length} and a breadth of ${this.breadth}.`;
        //return `result is ${this.length * this.breadth}`;
    }
}

let rectangle = new Rectangle('Red', 10, 5);
console.log(rectangle.getDescription());

class PersonDetails {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
class Student extends PersonDetails {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        super.introduce();
        console.log(`I am studying ${this.major}.`);
    }
}

const john = new Student("John", 20, "Computer Science");
john.introduce();


//Method Overriding
class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    getArea() {
        console.log(`${this.color} and ${this.name} are can not implement to get area`);
        //console.log(`Area of rectangle is ${this.color * this.name}`);
        
    }
    getPerimeter() {
        console.log(`${this.color} and ${this.name} are can not implement to get perimeter`);
        //console.log(`Area of rectangle is ${2*(this.color + this.name)}`);
    }
}
// let shape = new Shape("Red", "Square");
// shape.getArea();
// shape.getPerimeter();

class Rectangle extends Shape { // Method Overriding
    constructor(color, length, breadth){
        super(color, "Rectangle"); //super constructor helps in method overriding by allowing the child class to build upon the functionality of the parent class.
        this.length = length;
        this.breadth = breadth;
        //super(name);
        // this.length = length;
        // this.width = width;
    }
    showArea() {
        console.log(`Area of rectangle is ${this.length * this.breadth}`);
    }
    showPerimeter() {
        return `Perimeter of rectangle is ${2 * (this.length + this.breadth)}`;
    }
}
let result = new Rectangle('Red',10, 5);
result.showArea();
console.log(result.showPerimeter());

class Circle extends Shape {
    constructor(color, radius){
        super(color, "Circle");
        this.radius = radius;
    }
    getAreaa() {
        console.log(`Area of circle is ${Math.PI * this.radius * this.radius}`);
    }
    getPerimeterr() {
        return `Circumference of circle is ${2 * Math.PI * this.radius}`;
    }
}
let result1 = new Circle('Blue', 5);
result1.getAreaa();
console.log(result1.getPerimeterr());


//static methods that belong to the class itself rather than to instances of the class.
//Static methods are often used for utility functions that are related to the class but do not require access to instance-specific data.
class MathUtils {
    static multiply(a, b) {
        return a * b;
    }
}
// Calling static methods without creating an instance of the class.
console.log(MathUtils.multiply(5, 10));

//Static methods can be used to create factory methods that return instances of the class.
class Person{
    constructor(name, age, gender){
        this.personName = name;
        this.personAge = age;
        this.personGender = gender;
    }
    getInfo() {
        return `Person name is ${this.personName}, age is ${this.personAge}, gender is ${this.personGender}`;
    }
    static createPerson(name, age, gender){
        return new Person(name, age, gender);
    }
    // getInfo() {
    //     return `Person name is ${this.personName}, age is ${this.personAge}, gender is ${this.personGender}`;
    // }

    /*
    //console.log(`Person name is ${this.personName}, age is ${this.person}`);
    this can only be used inside instance methods or the constructor where it has a meaningful context referring to the instance of the class. 
    It cannot be used directly in the class body because there is no instance context there.
    */
}
let person = Person.createPerson('John', 15, 'M');
console.log(person);
console.log(person.getInfo());