const addBtn = document.getElementById('addButton');
const todoInputs = document.getElementById('todoInputs');
const todoList = document.getElementById('todoList')

addBtn.addEventListener('click', addTodo);

function addTodo(){
    const task = todoInputs.value.trim();
    if (task === ""){
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${task} <button class='delete-btn'> Delete </button>`

    const deleteBtn = li.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    todoInputs.value = '';
}