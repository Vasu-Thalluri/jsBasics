let fruits = ["apple", "banana", "orange", "mango"];

let secondFruit = fruits[1];
console.log(secondFruit);

let newFruit = fruits.push("Kiwi");
console.log(fruits);

let remove = fruits.shift();
console.log(fruits);

let fruitLengths = fruits.map((fruit) =>{
     return fruit.length
});
console.log(fruitLengths);

let longFruits = fruits.filter((fruit)=>{
     return fruit.length > 5;
})
console.log(longFruits);