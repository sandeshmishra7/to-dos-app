let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notes = document.querySelector('.notes');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    var paragraph = document.createElement('p');
    var deleteBtn = document.createElement('div');
    var notesWrapper = document.createElement('div');
    notesWrapper.classList.add('notes-wrapper');
    deleteBtn.innerText = 'Delete Note';
    deleteBtn.classList.add('btn-style');
    paragraph.innerText = inputVal.value;
    paragraph.classList.add('p-style');
    notesWrapper.appendChild(paragraph);
    notesWrapper.appendChild(deleteBtn);
    notes.appendChild(notesWrapper);
    inputVal.value = '';

    deleteBtn.addEventListener('click', function () {
        notesWrapper.removeChild(paragraph);
        notesWrapper.removeChild(deleteBtn);
    });
}