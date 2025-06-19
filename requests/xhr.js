let getBtn = document.getElementById("fetch");
let sendBtn = document.getElementById("send");

function XmlHttpRequest(method, url, body = null){
    //console.log("hi Xhr")
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        if(method === 'POST' && body !== null){
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(body));
            //console.log(`PayLoad of POST request ${JSON.stringify(body)}`);
        } else {
            xhr.send();
        }
        xhr.onload = function(){
            if(xhr.status >= 400){
                //console.log(xhr.response);
                reject(xhr.response);
                // let res = JSON.parse(xhr.response);
                // console.log(res);
            } else {
                let response = xhr.response;
                //console.log(response);
                resolve(response);
                //let data = 
            }
        }
        xhr.onerror = ()=>{
            //console.log("Network error");
            reject("Network error"); 
        }
        
    })
}
//XmlHttpRequest().then(res=>console.log(res));

function getData() {
    XmlHttpRequest('GET', 'https://reqres.in/api/users')
    .then(resData=>console.log(resData))
    .catch(err=>console.log(err));
}

function sendData(){
    XmlHttpRequest('POST', 'https://reqres.in/api/create', {
        "name": "morpheus",
        "job": "leader"
    }).then(resData=>console.log(resData))
    .catch(err=>console.log(err));
}

getBtn.addEventListener("click", getData);
sendBtn.addEventListener("click", sendData);