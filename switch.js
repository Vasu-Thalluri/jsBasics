/*
let dayOfWeek = "Thursday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday, the start of the week!");
        break;
    case "Tuesday":
        console.log("It's Tuesday, a regular workday");
        break;
    case "Wednesday":
        console.log("It's Wednesday, a regular workday");
        break;
    case "Thursday":
        console.log("It's Thursday, a regular workday");
        break;
    case "Friday":
        console.log("It's Friday, the end of the week!");
        break;
    case "Saturday":
        console.log("It's Saturday, a holiday");
        break;
    case "Sunday":
        console.log("It's Sunday, a holiday");
        break;
    default:
        console.log("Please enter a day");
}
*/

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
/*rl.question("Enter the day of week: ", (day) => {
    let Day = day.toUpperCase();
    //day = prompt("Enter a day of the week");
    switch (Day) {
        case "MONDAY":
            console.log("It's Monday, the start of the week!");
            break;
        case "TUESDAY":
            console.log("It's Tuesday, a regular workday");
            break;
        case "WEDNESDAY":
            console.log("It's Wednesday, a regular workday");
            break;
        case "THURSDAY":
            console.log("It's Thursday, a regular workday");
            break;
        case "FRIDAY":
            console.log("It's Friday, the end of the week!");
            break;
        case "SATURDAY":
            console.log("It's Saturday, a holiday");
            break;
        case "SUNDAY":
            console.log("It's Sunday, a holiday");
            break;
        default:
            console.log("Please enter a day");
    }
    personsAge();
    rl.close();
    //personsAge();
});*/

//function personsAge (){
    rl.question("Enter Person's Age: ", (age) => {
        //day = prompt("Enter a day of the week");
        switch (true) {
            case age < 18:
                console.log("You are a minor.");
                break;
            case age >= 18 && age < 65:
                console.log("You are an adult.");
                break;
            case age >= 65:
                console.log("You are a senior citizen.");
            default:
                console.log("You entered an invalid age");
        }
        rl.close();
    });
//}
