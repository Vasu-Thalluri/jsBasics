let list = document.getElementById("list");
let ol = document.createElement('ol');
// let input1 = document.createElement('input');
// input1.type = 'checkbox';
// input1.name = 'cb1';
//input1.textContent = 'cb1';
//console.log(input1);

list.appendChild(ol);
//ol.appendChild(input1);

let items = ['item1', 'item2', 'item3', 'item4'];

function createListItem(text){
    let li = document.createElement('li');
    let inputCB = document.createElement('input');
    inputCB.type = 'checkbox';
    inputCB.addEventListener('change', function(){
        if(inputCB.checked){
            li.classList.add('crossed-out');
            console.log(text);
        } else{
            li.classList.remove('crossed-out');
        }
    })
    li.appendChild(inputCB);
    li.appendChild(document.createTextNode(text));
    return li;
}

items.forEach(item => {
    let listItem = createListItem(item);
    ol.appendChild(listItem);
})