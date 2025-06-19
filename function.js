function numSum(num1, num2){
    return num1 + num2;
}
console.log(numSum(4, 8));
console.log("----------------");

console.log((function numSum(num1, num2){
    return num1 + num2;
}(4,8)));// this type of function called as Immediately invoked function expression(IIFE);
console.log("----------------");

function evenOdd(num){
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(evenOdd(21));
console.log("------------------");

function sumEle(elems){
    // let sum = 0;
    // for(let i = 0; i < elems.length; i++) {
    //     sum += elems[i];
    //     //console.log(sum);
    // }
    // return sum;
    let arry = [];
    let sum = 0;
    elems.forEach((e, i) => {
        sum += elems[i];
        let x = e * 2;
        //console.log(x);
        arry.push(x);
        //arry.filter((e)=>{})
    })
    //console.log(elems);
    console.log(arry);
    return sum;
}
console.log(sumEle([5, 7, 8, 9]));
console.log("------------------");

function doubledElements(elems){
    let doubled = elems.map((e)=>{
        return e * 2;
    })
    return doubled;
}
console.log(doubledElements([5, 7, 8, 9]));
console.log("------------------");

function mapFilterElements(elems){
    let doubled = elems.map((e)=>{
        return e * 2;
    }).filter((e)=>{
        return e > 15;
    })
    return doubled; //we use two higher oreder functions here. this is called chaining with other method.
}
console.log(mapFilterElements([5, 7, 8, 9]));
console.log("------------------");

function filterElements(elems){
    let doubled = elems.filter((e)=>{
        return e > 6;
    })
    return doubled;
}
console.log(filterElements([5, 7, 8, 9]));
console.log("------------------");

function filterMapElements(elems){
    let doubled = elems.filter((e)=>{
        return e > 6;
    }).map((e)=>{
        return e * 2;
    })
    return doubled; //we use two higher oreder functions here. this is called chaining with other method.
}
console.log(filterMapElements([5, 7, 8, 9]));
console.log("---------------");

console.log(multiply([5, 6]));// function hoisting
function multiply(values){
    return values[0] * values[1];
}

// console.log(product([5, 6]));//ReferenceError: Cannot access 'product' before initialization
// let product = function(){
//     return values[0] * values[1];
// }
console.log("------------------");

class numbers {
    constructor(values){
        this.values = values;
    }
    
    product() {
        // let mul = ()=> this.values[0] * this.values[1];
        // return mul();

        /*
        function mul(){
            return this.values[0] * this.values[1];
        }
        return mul();// return this.values[0] * this.values[1];^TypeError: Cannot read properties of undefined (reading 'values')
        */
        

        const mul = () => this.values[0] * this.values[1]; // Arrow function
        return mul();
        
       /*
        function mul() {
            return this.values[0] * this.values[1];
        }
        return mul.bind(this)(); // Bind `this` to the Numbers instance
        */

        /*
        const self = this; // Store reference to `this`
        function mul() {
          return self.values[0] * self.values[1];
        }
        return mul();
        */
    }
}
const result = new numbers([5, 7]);
console.log(result.product());
