let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notes = document.querySelector('.notes');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {

    e.preventDefault();

    var paragraph = document.createElement('p');
    paragraph.innerText = inputVal.value;
    paragraph.classList.add('p-style');
    notes.appendChild(paragraph);
    inputVal.value = '';

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function () {
        notes.removeChild(paragraph);
    });
}