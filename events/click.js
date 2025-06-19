//Using just JavaScript, Create a button with the text "Click Me". When the button is clicked, change the text to "Clicked!".
let button = document.createElement("button");
button.textContent = "Click me";

button.addEventListener("click", function(){
    button.textContent = "Clicked";
    console.log(button.textContent);
})
button.style.backgroundColor = "Green";
console.log(button.textContent);
document.body.appendChild(button);


let grandParent = document.querySelector(".grandParent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
/*
grandParent.addEventListener("click", function(e){
    console.log("Grand Parent Bubble");
})
grandParent.addEventListener("click", function(e){
    //console.log(e.target);
    // e.stopImmediatePropagation();
    console.log("Grand Parent Capture");
    // e.stopPropagation();
}, {
     capture: true
 })
*/
parent.addEventListener("click", function(e){
    console.log("Parent Bubble");
})
parent.addEventListener("click", function(e){
    console.log("Parent Capture");
    // e.stopPropagation();
    // e.stopImmediatePropagation();
}, {
     capture: true
 }
)
child.addEventListener("click", function(e){
    console.log("Child Bubble");
})
child.addEventListener("click", function(e){
    console.log("Child Capture");
    e.stopPropagation();
    //e.stopImmediatePropagation();
}, {
    capture: true
})
// document.addEventListener("click", function(){
//     console.log("Document")
// })

// what will happen if we do not capture an event
// is event object shared to parent in bubbling phase
// is event object shared to parent when we stop the propagation