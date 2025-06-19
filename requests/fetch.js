let getBtn = document.getElementById("fetch");
let sendBtn = document.getElementById("send");
/*
async function getData(){
    console.log("hi");
    try {
        let res = await fetch('https://reqres.in/api/users');
        //console.log(users);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        } else {
            let users = await res.json();
            console.log(users);
        }
    } catch (error) {
        console.error("Error fetching cat facts:", error);
    }
}
//getData();
*/
function fetchData(method, url, body){
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: body ? {'Content-Type': 'application/json'} : {}
    }).then(response=>{
        if(response.status >= 400){
            return response.json().then(errData=>{
                if(Object.keys(errData).length === 0){
                    const error = new Error('Something went wrong!');
                    errData = error;
                    throw errData;
                } else {
                    //console.log(errData)
                    throw errData;
                }
            });
        }
        return response.json();
    });
};

const getData = ()=>{
    fetchData('GET', 'https://reqres.in/api/users').then(resData=>{
        //console.log(resData);
        if(resData && resData.data){
            let data = resData.data;
            let userList = document.getElementById("user-list")
            userList.innerHTML = '';
            data.forEach((element, index) => {
                // let div = document.createElement('div');
                // div.id = `user-${index}`;
                // div.textContent = element.first_name;
                let row = document.createElement("tr");
                let cellFn = document.createElement("td");
                let cellLn = document.createElement("td");
                let cellSno = document.createElement("td");
                let cellEmail = document.createElement("td");
                cellSno.id = `user-${index+1}`
                cellFn.id = `user-${index}`;
                cellLn.id = `user-${index}`;
                cellEmail.id = `user-${index}`;
                cellSno.textContent = element.id;
                cellFn.textContent = element.first_name;
                cellLn.textContent = element.last_name;
                cellEmail.textContent = element.email;
                row.appendChild(cellSno);
                row.appendChild(cellFn);
                row.appendChild(cellLn);
                row.appendChild(cellEmail);
                userList.appendChild(row);
                userList.style.color = "blue";
                //console.log(userList);
            }); 
            console.log(userList);
        }
    }) .catch(err => console.log(err));
}
//getData();

const sendData = ()=>{
    fetchData('POST', 'https://reqres.in/api/register',{
        "email": "eve.holt@reqres.in",
        "password": "pistol"
        })
        .then(resData=>{
        console.log(resData);
    }).catch(err=>console.log(err));
}
//sendData();

sendBtn.addEventListener("click", sendData);
getBtn.addEventListener("click", getData);