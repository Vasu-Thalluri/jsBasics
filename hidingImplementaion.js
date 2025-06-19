class shape {
    #color;
    #name;
    constructor(color, name){
        if(this.constructor === shape){
            throw new Error("Cannot instantiate abstract class shape");
        }
        this.#color = color;
        this.#name = name;
    }
    getArea(){
        throw new Error("Abstract method getArea must be implemented");
    }
    getPerimeter(){
        throw new Error("Abstract method getPerimeter must be implemented")
    }
    getDescription() {
        return `This is a ${this.#color} ${this.#name}.`;
    }
}
// let result = new shape("red", "rectangle");
// console.log(result); //Error: Cannot instantiate abstract class shape.
// console.log(result.getColor());

class Rectangle extends shape{
    #length;
    #breadth;
    constructor(color, length, breadth){
        super(color, "Rectangle");
        this.#length = length;
        this.#breadth = breadth;
    }
    getArea(){
        return `This is ${super.getDescription()}.Area of rectangle is ${this.#length * this.#breadth}`;
    }
    getPerimeter(){
        return `This is ${super.getDescription()}.Perimeter of rectangle is ${2 * (this.#length + this.#breadth)}`;
    }
}
// let result1 = new Rectangle("Blue", 4, 6);
// console.log(result1);
// console.log(result1.getArea());
// console.log(result1.getPerimeter());

class Circle extends shape{
    #radius;
    constructor(color, name, radius){
        super(color, name);
        this.#radius = radius;
    }
    getArea(){
        return `This is ${super.getDescription()}.Area of circle is ${Math.PI*this.#radius*this.#radius}`;
    }
    getPerimeter(){
        return `This is ${super.getDescription()}.Circumference of circle is ${2*Math.PI*this.#radius}`;
    }
}
// let result3 = new Circle("Blue", "Circle", 8);
// console.log(result3);
// console.log(result3.getArea());
// console.log(result3.getPerimeter());