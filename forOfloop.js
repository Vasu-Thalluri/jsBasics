let array = ["XUV3xo", "Nexon", "Harrier", , "Creta"];
for(let item of array){
    //console.log(item);
    if(item == null) console.log("null");
}
console.log(undefined == null);

let cars = ["XUV3xo", "Nexon", "Harrier", , "Creta"];
for(let item of cars) {
    console.log(item);
    if(item) {
        console.log(`characters of ${item}:`)
        for(let char of item){
            console.log(char);
        }
    }
}

let employee = {
    empID: 0o1,
    name: "Xavier",
    company: "Instagram",
    role: "Dev"
}
for(let key in employee) {
    //console.log(value);
    if(key) {
        let value = employee[key];
        console.log(value);
        
    }
}
// for (const key in employee) {
//     if (Object.prototype.hasOwnProperty.call(employee, key)) {
//         const element = employee[key];
//         console.log(element);
        
        
//     }
// }