let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notesWrapper = document.querySelector('.notes-wrapper');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {

    e.preventDefault();

    var paragraph = document.createElement('p');
    var deleteBtn = document.createElement('div');
    deleteBtn.innerText = 'Delete Note';
    deleteBtn.classList.add('btn-style');
    paragraph.innerText = inputVal.value;
    paragraph.classList.add('p-style');
    notesWrapper.appendChild(paragraph);
    notesWrapper.appendChild(deleteBtn);
    inputVal.value = '';

    deleteBtn.addEventListener('click', function () {
        notesWrapper.removeChild(paragraph);
        notesWrapper.removeChild(deleteBtn);
    });
}