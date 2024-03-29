let inputVal = document.getElementById('name');
let form = document.querySelector('form');
let notes = document.querySelector('.notes');

showTodos();
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let newArr = [];
    // Creating elements
    var paragraph = document.createElement('input');
    var deleteBtn = document.createElement('div');
    var edit = document.createElement('div');
    var checkbox = document.createElement('input');
    var notesWrapper = document.createElement('div');

    // paragraph.innerText = inputVal.value.trim();

    // Adding styling to the elements via css classes
    notesWrapper.classList.add('notes-wrapper');
    paragraph.classList.add('p-style');
    edit.classList.add('btn-style');
    deleteBtn.classList.add('btn-style');
    checkbox.classList.add('checkbox-style');

    paragraph.type = 'text';
    paragraph.id = 'pid';
    paragraph.setAttribute('disabled', true);
    paragraph.value = inputVal.value.trim();

    edit.innerText = 'Edit';
    deleteBtn.innerText = 'Delete Note';

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    checkbox.addEventListener('click', function () {
        paragraph.classList.toggle('cancel');
    });

    if (inputVal.value.length > 20) {
        return alert('Please use less than 20 characters');
    };

    if (inputVal.value.length != 0) {
        // Appending elements to the structure
        notesWrapper.appendChild(paragraph);
        notesWrapper.appendChild(checkbox);
        notesWrapper.appendChild(edit);
        notesWrapper.appendChild(deleteBtn);
        notes.appendChild(notesWrapper);

        inputVal.value = '';
    }
    else {
        alert('Please enter some value');
    }

    edit.addEventListener('click', function () {
        paragraph.setAttribute('contenteditable', true);
        paragraph.removeAttribute('disabled');
        paragraph.focus();
        paragraph.setSelectionRange(paragraph.value.length, paragraph.value.length);
    });

    paragraph.addEventListener('blur', function () {
        if (paragraph.value.length === 0) {
            notesWrapper.removeChild(paragraph);
            notesWrapper.removeChild(checkbox);
            notesWrapper.removeChild(edit);
            notesWrapper.removeChild(deleteBtn);
            notes.removeChild(notesWrapper);
        }
        else {
            paragraph.setAttribute('disabled', true);
        }
    })

    deleteBtn.addEventListener('click', function () {
        notesWrapper.removeChild(paragraph);
        notesWrapper.removeChild(checkbox);
        notesWrapper.removeChild(edit);
        notesWrapper.removeChild(deleteBtn);
        notes.removeChild(notesWrapper);
    });

    // Adding todos to local storage
    let todosList = localStorage.getItem('todos');
    if (todosList === null) {
        todosObj = [];
    }
    else {
        todosObj = JSON.parse(todosList);
    }

    todosObj.push(paragraph.value);
    localStorage.setItem('todos', JSON.stringify(todosObj));
    console.log(todosObj);

    showTodos();
    newArr = todosObj;
}

// Function to display notes from storage
function showTodos() {
    let todosList = localStorage.getItem('todos');
    if (todosList === null) {
        todosObj = [];
    }
    else {
        todosObj = JSON.parse(todosList);
    }

    let str = '';
    todosObj.forEach(element => {
        str += `<div class="notes-wrapper"><input class="p-style" type="text" id="pid" disabled="true">${element}
        <input class="checkbox-style" type="checkbox" name="name" value="value" id="id"><div class="btn-style">Edit</div><div class="btn-style">Delete Note</div></div>`
    });

    let todosElm = document.querySelector('.notes');
    if (todosObj.length != 0) {
        todosElm.innerHTML = str;
    } else {
        todosElm.innerHTML = `Nothing to show! Use "Enter Note" section above to add todos.`;
    }
}
