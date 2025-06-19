let dDown = document.getElementById('dDown');
let label = document.createElement('label');
label.setAttribute('for', 'carSelect') //The for attribute of the label element is set to match the id of the select element
                                //This association improves accessibility and usability by linking the label with the corresponding form control.
label.textContent = 'Choose a car';
//console.log(label)
dDown.appendChild(label);
let show = document.createElement('p');

function createListItem(){
    let select = document.createElement('select');
    select.setAttribute('id', 'carSelect');
    select.setAttribute('name', 'carSelect');
    let options = ['Select', 'XUV3xo', 'Harrier', 'Nexon'];
    options.forEach(optionText => {
        let option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        select.appendChild(option);
    })
    //console.log(select)
    select.addEventListener('change', function(){
       //console.log('hi Option')
        let selectedOption = select.options[select.selectedIndex].text;
        if(selectedOption && selectedOption !== 'Select'){
            //console.log(selectedOption);
            let span = document.createElement('span');
            //console.log(span)
            span.classList.add('span-color');
            span.textContent = selectedOption;
            //console.log(show)
            //console.log(span)
            show.innerHTML = '';// Clear previous content
            show.appendChild(span);
            //show.textContent = `You selected a <span class="span-color">${selectedOption}</span>car`;
            show.innerHTML = `You choosen a <span class="span-color">${selectedOption}</span> car`;
        } else {
            show.innerHTML = ''; // Clear content if "Select" is chosen
            }
        //show.textContent = `You selected a ${selectedOption} car`;
        // option.appendChild(document.createTextNode('Select'));
        // option.appendChild(document.createTextNode('Xuv'));
        // option.appendChild(document.createTextNode('Harrier'));
        // option.appendChild(document.createTextNode('Nexon'));
    })
    return select;
}
let selection = createListItem();
dDown.appendChild(selection);
dDown.appendChild(show);


