
const text_input = document.getElementsByTagName('input')[0];
const mainContainer = document.getElementsByClassName('container') [0]
const divFromInput = document.createElement('div');
divFromInput.className = 'new_div'
divFromInput.innerHTML = `<h3 class="title">New Div</h3>`

    text_input.addEventListener('mouseover', newDiv);
    text_input.addEventListener('mouseout', deleteNewDiv);

function newDiv (){
    mainContainer.appendChild(divFromInput)
}

function deleteNewDiv(){
    mainContainer.removeChild(divFromInput)
}