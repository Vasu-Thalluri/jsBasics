/*
Abstract Class: An abstract class is a class that is intended to be subclassed and not instantiated directly. It can contain abstract methods that must be implemented by subclasses.
Abstract Method: An abstract method is a method that is declared in the abstract class but does not have an implementation. Subclasses are required to provide an implementation for these methods.
*/

class Shape {
    constructor(color, name){
        if(this.constructor === Shape){
            throw new Error("Cannot instantiate abstract class shape");
        }
        this.color = color;
        this.name = name;
    }
    // Abstract method to get area
    getArea(){
        throw new Error("Abstract method getArea must be implemented");
    }
    // Abstract method to get area
    getPerimeter(){
        throw new Error("Abstract method getPerimeter must be implemented")
    }
    // Method to get description
    getDescription() {
        return `This is a ${this.color} ${this.name}.`;
    }
}
// let result = new shape("red", "rectangle");
// console.log(result); //Error: Cannot instantiate abstract class shape.
// console.log(result.getArea()); //Error: Cannot instantiate abstract class shape.
 //At above console we actually have to get an error called //Error: Abstract method getArea must be implemented.
 //But we getting //Error: Cannot instantiate abstract class shape. then if we want to show actual error, we can show that by using try catch block.
 try {
    let result = new Shape("Red", "Rectangle");
    console.log(result.getArea());
 }
 catch (error) {
    console.log(error.message); 
 }
 //we can handle the error through try catch block.
//console.log(result.getArea());


class Rectangle extends Shape{
    constructor(color, length, breadth){
        super(color, "Rectangle");
        this.length = length;
        this.breadth = breadth;
    }
    getArea(){
        return `This is ${super.getDescription()}.Area of rectangle is ${this.length * this.breadth}`;
    }
    getPerimeter(){
        return `This is ${super.getDescription()}.Perimeter of rectangle is ${2 * (this.length + this.breadth)}`;
    }
}
let result1 = new Rectangle("Blue", 4, 6);
console.log(result1);
console.log(result1.getArea());
console.log(result1.getPerimeter());

class Circle extends Shape{
    constructor(color, name, radius){
        super(color, name);
        this.radius = radius;
    }
    getArea(){
        return `This is ${super.getDescription()}.Area of circle is ${Math.PI*this.radius*this.radius}`;
    }
    getPerimeter(){
        return `This is ${super.getDescription()}.Circumference of circle is ${2*Math.PI*this.radius}`;
    }
}
// let result3 = new Circle("Blue", "Circle", 8);
// console.log(result3);
// console.log(result3.getArea());
// console.log(result3.getPerimeter());



