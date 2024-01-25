let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notes = document.querySelector('.notes');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {

    e.preventDefault();

    var paragraph = document.createElement('p');
    var deleteBtn = document.createElement('div');
    deleteBtn.innerText = 'Delete Note';
    deleteBtn.classList.add('btn-style');
    paragraph.innerText = inputVal.value;
    paragraph.classList.add('p-style');
    notes.appendChild(paragraph);
    notes.appendChild(deleteBtn);
    inputVal.value = '';

    deleteBtn.addEventListener('click', function () {
        notes.removeChild(paragraph);
        notes.removeChild(deleteBtn);
    });
}