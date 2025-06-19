let date = new Date();
let dateString = date.toString()
let splitDate = dateString.split('');
let currentDate = splitDate.splice(8, 2).join('');
//console.log("Current Date ",sliceDate);
console.log(`Current Date: ${currentDate}`);

let year = date.getFullYear();
console.log(`Current Year: ${year}`);

let month = date.getMonth()+1;
console.log(`Current Month: ${month}`);

let day = date.getDay();
console.log(`Current Day: ${day}`);

let hours = date.getHours();
console.log(`Current Hour: ${hours}`);

let minutes = date.getMinutes();
console.log(`Current Minutes: ${minutes}`);

let seconds = date.getSeconds();
console.log(`Current Seconds: ${seconds}`);

console.log(`current date and time in the format of "YYYY-MM-DD HH:MM:SS": ${year}-${month}-${currentDate} ${hours}:${minutes}:${seconds}`);

function getTime(currentDate){
    let hours = currentDate.getHours();
    //console.log(`Current Hour: ${hours}`);
    let minutes = currentDate.getMinutes();
    //console.log(`Current Minutes: ${minutes}`);
    let seconds = currentDate.getSeconds();
    //console.log(`Current Seconds: ${seconds}`);
    return `Current Time: ${hours}:${minutes}:${seconds}`;
}
console.log(getTime(date));

function getMonth(){
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    return `Current Month: ${monthName}`;
}
console.log(getMonth());