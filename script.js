const addBtn = document.getElementById('addButton');
const todoInputs = document.getElementById('todoInputs');
const todoList = document.getElementById('todoList');
const themeBtn = document.getElementById('themeBtn');

window.addEventListener('load', loadTodos);

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const task = todoInputs.value.trim();

    if (task === "") {
        alert('Please enter a task');
        return;
    }

    createTodo(task);
    saveTodos();

    todoInputs.value = '';
}

function createTodo(task) {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTodos();
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}

function saveTodos() {
    const todos = [];

    document.querySelectorAll('#todoList li span').forEach((span) => {
        todos.push(span.textContent);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodo = JSON.parse(localStorage.getItem('todos')) || [];

    storedTodo.forEach((task) => {
        createTodo(task);
    });
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
});