function outer(){
    let x = 10;
    function inner(y){
        return x + y;
    }
    return inner;
}

let add = outer();
console.log(add(2));


function counter(){
    let count = 0;
    function increment(){
        count++
        console.log(count);
    }
    return increment;
}

let increase = counter();
increase();
increase();

function multiplyer(x){
    function inner(y){
        return x * y;
    }
    return inner;
}
let double = multiplyer(2);
let triple = multiplyer(3);
console.log(double(5));
console.log(triple(5));