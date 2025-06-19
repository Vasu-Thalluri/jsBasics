function welcomeMsg(){
    console.log("Hello World");
}
welcomeMsg();

/*
setTimeout(() => {
    console.log("Hello World")
}, 1000);
*/

/*
function sayHi() {
    console.log("Hello Hai");
}
sayHi();
*/

/*
setTimeout(sayHi, 2000);
*/

/*
let sum = setTimeout(doSum, 1500, 5, 5);
// if(true){
//     clearTimeout(sum);
// }
function doSum(x, y){
    console.log(`sum of ${x} and ${y} is ${x + y}`);
}
*/

/*
let mul = setTimeout(doMul, 2500, 5, 5);
// if(true){
//     clearTimeout(sum);
// }
function doMul(x, y){
    console.log(`product of ${x} and ${y} is ${x * y}`);
}
*/

/*
let count = 0;
let cnt = setInterval(counter, 2800);
//let count = 0;
function counter(){
    console.log(`increment of 0 in 5000ms ${count++}`);
    if(count == 5){
        clearInterval(cnt);
    }
}
*/


/*
//Callback
let posts = [
    {title: "post1", body: "This is a post1"},
    {title: "post2", body: "This is a post2"}
]
function getPosts(){
    //console.log(posts);
    setTimeout(()=>{
        posts.forEach((post, index)=>{
            console.log(post.title);
        })
    },3000)
}
//getPosts();

function createPost(post, cb){
    setTimeout(()=>{
        posts.push(post);
        console.log(posts);
        cb();
    },14050)
}
createPost({title:"post3", body:"This is a post3"},getPosts);
*/

function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');


let posts = [
    {title: "post1", body: "This is a post1"},
    {title: "post2", body: "This is a post2"}
]

//promise
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            console.log(posts);
            const error = false;
            if(!error){
                resolve("201 created successfully");
            } else {
                reject("Error: Something went wrong while getting posts");
            }
        },2000)
    })
}
//createPost({title:"post3", body:"This is a post3"}).then(getPosts).catch(error => console.log(error));

function getPosts(){
    //console.log(posts);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.forEach((post, index)=>{
                console.log(post.title);
            })
            resolve("200 ok successfully fetched");
        },0)
    })
}
//getPosts();


//promise all
let promise1 = "Hello promise";
let promise2 = 10;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Hello promise3");
})
promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

//Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


//async/await
async function Posts() {
    try {
        await createPost({title: "post3", body: "This is post3"}).then(res=>console.log(res));
        await getPosts().then(res=>console.log(res)); 
    } catch (error) {
        console.log(error);
    } 
}
Posts();

/*
async function fetchUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    console.log(users);
}
fetchUsers();
*/

async function myFunction() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello'), 1000);
    });
  
    const error = false;
  
    if (!error) {
      const res = await promise; // Wait until promise is resolved
      return res;
    } else {
      await Promise.reject(new Error('Something went wrong'));
    }
  }
  
  myFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err));


function greet(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //console.log("Hello World!")
            const err = false;
            if(!err){
                resolve("Hello World!");
            } else {
                reject("Error: Good Bye!")
            }
            
        }, 5000)
    })
}
greet().then(msg=>console.log(msg)).catch(error => console.log(error));

function numFunc(num){
    return new Promise((resolve, reject)=>{
        const randomDelay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(()=>{
            const err = false;
            if(!err){
                resolve(`The square of number ${num} is ${num * num}`);
            } else {
                reject("Error: Something went wrong");
            }
        }, randomDelay)
    })
}
//numFunc(2).then(res=>console.log(res)).catch(err=>console.log(err));
async function squareOfNum() {
    try {
        await numFunc(2).then(res=>console.log(res));
        await numFunc(9).then(res=>console.log(res));
        await numFunc(14).then(res=>console.log(res));
        await numFunc(5).then(res=>console.log(res));
    } catch (error) {
        console.log(error);
    }
}
squareOfNum();