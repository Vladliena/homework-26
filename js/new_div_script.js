const mainText = document.getElementsByTagName('h1')[0]
const mainContainer = document.getElementsByClassName('container') [0]
const divFromInput = document.createElement('div');
divFromInput.className = 'new_div'
divFromInput.innerHTML = `<h3 class="title">New Div</h3>`

mainText.addEventListener('mouseover', newDiv);
mainText.addEventListener('mouseout', deleteNewDiv);

function newDiv() {
    mainContainer.appendChild(divFromInput)
}

function deleteNewDiv() {
    mainContainer.removeChild(divFromInput)
}