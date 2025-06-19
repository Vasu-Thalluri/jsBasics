class Person {
    // name = ""
    // age = ""
    constructor(name, age) {
        // super();
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`${this.name} is ${this.age} years old`);
        
    }
}
let pDetails = new Person("vasu", 27);
pDetails.introduce();

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`${this.make} ${this.model} ${this.year} is being driven`);
        
    }
}
let carDetails = new Car("TATA", "Harrier", "2020");
carDetails.drive();