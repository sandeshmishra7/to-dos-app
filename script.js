let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notes = document.querySelector('.notes');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    var paragraph = document.createElement('p');
    var deleteBtn = document.createElement('div');
    var checkbox = document.createElement('input');
    var notesWrapper = document.createElement('div');

    notesWrapper.classList.add('notes-wrapper');

    paragraph.innerText = inputVal.value.trim();
    paragraph.classList.add('p-style');

    deleteBtn.innerText = 'Delete Note';
    deleteBtn.classList.add('btn-style');

    checkbox.classList.add('checkbox-style');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    if (inputVal.value.length > 20) {
        return alert('Please use less than 20 characters');
    }

    if (inputVal.value.length != 0) {
        notesWrapper.appendChild(paragraph);
        notesWrapper.appendChild(checkbox);
        notesWrapper.appendChild(deleteBtn);
        notes.appendChild(notesWrapper);

        inputVal.value = '';
    }
    else {
         alert('Please enter some value');
    }

    deleteBtn.addEventListener('click', function () {
        notesWrapper.removeChild(paragraph);
        notesWrapper.removeChild(checkbox);
        notesWrapper.removeChild(deleteBtn);
    });
}