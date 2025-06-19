
//Encapsulation. This approach ensures controlled access to the internal state of the object.
//but not fully encapsulated. 
class shape{
    constructor(color, name){
        this.color = color;
        this.name = name; 
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
       
    }
    getDescription(){
        return `${this.color} ${this.name}`;
    }
    setDescription(color, name){
        this.color = color;
        this.name = name;
    }
}
let resultVar = new shape("red", "Square");
console.log(resultVar); //Output: Shape {color: "red", name: "Square"}
console.log(resultVar.getColor());
resultVar.setColor("green");
console.log(resultVar.getColor());
console.log(resultVar.getDescription());
resultVar.setDescription("Blue", "Rectangle");
console.log(resultVar.getColor());
console.log(resultVar.getDescription());



//To fully encapsulate the behavior and hide the internal state, you should make the properties private and only allow access through the getter and setter methods.
//you can use the # syntax to create private fields to hide the internal state of object.

class Shape {
    // Private fields
    #color;
    #name;

    constructor(color, name) {
        this.#color = color;
        this.#name = name;
    }

    // Getter for color
    getColor() {
        return this.#color;
    }

    // Setter for color
    setColor(color) {
        this.#color = color;
    }

    // Getter for name
    getName() {
        return this.#name;
    }

    // Setter for name
    setName(name) {
        this.#name = name;
    }

    // Method to get description for shape
    getDescription() {
        return `This is ${this.#color} ${this.#name}`;
    }

    // Method to set description for shape
    setDescription(color, name) {
        this.#color = color;
        this.#name = name;
    }
}

// Creating an instance of Shape
// let result = new Shape("red", "Square");

// Accessing and modifying properties using getters and setters
// console.log(result); // Output: Shape {}
// console.log(result.getColor()); // Output: red
// result.setColor("green");
// console.log(result.getColor()); // Output: green
// console.log(result.getValuesForArea()); // Output: green and Square
// result.setValuesForArea("Blue", "Square");
// console.log(result.getValuesForArea()); // Output: Blue and Square

class Rectangle extends Shape{
    #length;
    #breadth

    constructor(color, name, length, breadth){
        super(color, name);
        this.#length = length;
        this.#breadth = breadth;
    }

    getArea(){
        return `${super.getDescription()} Area of rectangle is ${this.#length * this.#breadth}`;
    }
    getPerimeter(){
        return `${super.getDescription()}.Perimeter of rectangle is ${2 * (this.#length + this.#breadth)}`;
    }
    setLengthAndBreadth(length, breadth){
        this.#length = length;
        this.#breadth = breadth;
    }
}

class Circle extends Shape{
    #radius;

    constructor(color, radius){
        super(color, "Circle");
        this.#radius = radius;
    }

    getArea(){
        return `${super.getDescription()}.Area of circle is ${Math.PI*this.#radius*this.#radius}`;
    }
    getPerimeter(){
        return `${super.getDescription()}.Circumference of circle is ${2*Math.PI*this.#radius}`;
    }
    setRadius(radius){
        this.#radius = radius;
    }
}

let result = new Circle("Blue", 8);
console.log(result.getArea());
console.log(result.getPerimeter());
result.setRadius(10);
console.log(result.getArea());
console.log(result.getPerimeter());


