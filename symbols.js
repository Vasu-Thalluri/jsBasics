let symbol = Symbol("myFirstSymbol");
console.log(symbol);
console.log(typeof(symbol));

let descriptSym = Symbol("it is a description of symbol method");
console.log(descriptSym);
console.log(descriptSym.description);


let customIterable = {
    data : [1, 2, 3, 4, 5],
    [Symbol.iterator]: function(){
        let index = 0;
        let data = this.data;

        return {
            next: function(){
                if(index < data.length){
                    return {value: data[index++], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};
for (let value of customIterable){
    console.log(value);
}

let iterator = customIterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Creating an array with multiple Symbols using Symbol.for
let symbolArray = [
    Symbol.for("symbol1"),
    Symbol.for("symbol2"),
    Symbol.for("symbol3")
];

// Logging the Symbols in the array
console.log("Symbols in the array:");
symbolArray.forEach((sym, index) => {
    console.log(`Symbol ${index + 1}:`, sym);
});

// Retrieving the Symbols using Symbol.for with the same keys
let retrievedSymbol1 = Symbol.for("symbol1");
let retrievedSymbol2 = Symbol.for("symbol2");
let retrievedSymbol3 = Symbol.for("symbol3");

// Logging the retrieved Symbols
console.log("Retrieved Symbols:");
console.log("Retrieved Symbol 1:", retrievedSymbol1);
console.log("Retrieved Symbol 2:", retrievedSymbol2);
console.log("Retrieved Symbol 3:", retrievedSymbol3);

// Checking if the retrieved Symbols are the same as the ones in the array
console.log("Are the retrieved Symbols the same as the ones in the array?");
console.log(retrievedSymbol1 === symbolArray[0]); // Output: true
console.log(retrievedSymbol2 === symbolArray[1]); // Output: true
console.log(retrievedSymbol3 === symbolArray[2]); // Output: true