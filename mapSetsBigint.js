let phonebook = new Map();
console.log(phonebook);


//phonebook.set(key, value);
phonebook.set("Alice", "123-456-7890");
phonebook.set("Bob", "234-567-8901");
phonebook.set("Carol", "345-678-9012");
phonebook.set("Dan", "456-789-0123");

console.log(phonebook);

// Retrieving and logging the value associated with a specific key
console.log(phonebook.get("Bob"));
//console.log(phonebook.get("345-678-9012")); //undefined

console.log(phonebook.has("Dan"));
//console.log(phonebook.has("123-456-7890")); //false

for (const [name, phone] of phonebook) {
    //console.log(name);
    //console.log(phone);
    console.log(`${name}'s phone number is ${phone}`);
}

phonebook.forEach((value, key) => {
    console.log(`${key}'s phone number is ${value}`);
});

//My understanding level
// function uniqueChar(str){
//     let count;
//     for (let i = 0; i < str.length; i++) {
//         // console.log(str.length);
//         count = str.length;
//     }
//     console.log(count);
// }
// uniqueChar("virinchi");

function uniqueCharCount(str){
    let uniqueChar = new Set();
    for (const char of str) {
        //console.log(char);
        uniqueChar.add(char);
    }
    return uniqueChar.size;
}
let inputString = "virinchi";
let uniqueCount = uniqueCharCount(inputString);
console.log(`Count of unique chars in ${inputString} is ${uniqueCount}`);

function repetitiveChars(str){
    let seenChars = new Set();
    let repetitiveChars = new Set();
    for (const char of str) {
        if(seenChars.has(char)){
            repetitiveChars.add(char);
        } else {
            seenChars.add(char);
        }
    }
    return Array.from(repetitiveChars).join("");
}
let inputStr = "virinchi";
console.log(`repetitive char of "${inputStr}" is "${repetitiveChars(inputString)}"`);

// function repeatChar(str){
//     //let count;
//     for (let i = 0; i < str.length; i++) {
//         // console.log(str.length);
        
//     }
//     console.log(count);
// }
// repeatChar("virinchi");

function findRepetitiveChars(str) {
    let charCount = {};
    let repetitiveChars = [];

    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find characters that occur more than once
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repetitiveChars.push(char);
        }
    }

    return repetitiveChars.join("");
}

// Example usage
let string = "virinchi";
console.log(`Repetitive characters in "${inputStr}" are: "${findRepetitiveChars(inputStr)}".`); // Output: Repetitive characters in "virinchi" are: "i".

function repeatedChar(str){
    let repeatedChar = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if(char === str[j]){
                count++;
            }
        }
        //console.log(`${char}: ${count}`);
        if(count > 1 && !repeatedChar.includes(char)){
            repeatedChar.push(char);
        }
    }
    //console.log(repeatedChar)
    return repeatedChar.join("")
}
let str = "virinchi";
console.log(`Repetitive characters in "${inputStr}" are: "${repeatedChar(str)}".`);

/*
My understanding level
function removeDuplicates(arr, Arr){
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(num === arr[j]){
                count++;
            }
        }
        if(count === 1){
            filteredArr.push(num);
        }
    }
    for(let i = 0; i < Arr.length; i++){
        let number = Arr[i];
        let count = 0;
        for(let j = 0; j < Arr.length; j++){
            if(number === Arr[j]){
                count++;
            }
        }
        if(count === 1){
            filteredArr.push(number);
        }
    }
    return filteredArr;
}
console.log(removeDuplicates([4, 2, 6, 7, 2, 6, 8],[1, 5, 2, 3, 4, 6, 1, 3, 5]));
*/

function removeDuplicates(arr, Arr){
    let combinedArr = arr.concat(Arr);    
    let filteredArr = [];
    for(let i = 0; i < combinedArr.length; i++){
        let num = combinedArr[i];
        let count = 0;
        for(let j = 0; j < combinedArr.length; j++){
            if(num === combinedArr[j]){
                count++;
            }
        }
        if(count === 1){
            filteredArr.push(num);
        }
    }
    let sortedArr = filteredArr.sort((a, b)=> a - b);
    return sortedArr;
}
console.log(removeDuplicates([4, 2, 7, 2, 6, 8],[1, 2, 3, 4, 6, 3]));

/*
//My understanding level
let a = 9007199254740991;
let result1 = BigInt(a) + 1;
console.log(result1);
*/

let bigIntValue = BigInt(9007199254740991);
let result2 = bigIntValue + BigInt(1);
console.log(result2);

let a = 123456789012345678901234567890;
let y = BigInt(a);
console.log(typeof(y));

let bigIntVal = BigInt(123456789012345678901234567890);
let Str = bigIntVal.toString();
console.log(Str);
let normal = BigInt(Str);
console.log(normal)