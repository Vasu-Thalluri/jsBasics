let h1 = document.getElementById("text");
let p = document.getElementById("para");
let variable = "Hello, World!";
let paragraph = "Lorem ipsum dolor sit amet."
h1.innerHTML = variable;
p.innerHTML = paragraph;
console.log(h1.textContent);
console.log(p.textContent);