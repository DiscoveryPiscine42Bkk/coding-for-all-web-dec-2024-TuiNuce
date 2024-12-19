const todoList = document.getElementById('ft_list');
const newTodoButton = document.getElementById('new-todo');

function loadTodos() {
    const todos = localStorage.getItem('todos');
    if (todos) {
        try {
            const todosArray = JSON.parse(todos);
            todosArray.forEach(todo => {
                addTodoToDOM(todo, false);
            });
        } catch (error) {
            console.error("Failed to parse local storage:", error);
            alert("Error loading saved To-Do list.");
        }
    }
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodoToDOM(todoText, save = true) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    todoItem.addEventListener('click', function () {
        const confirmDelete = confirm('Do you want to remove this To-Do?');
        if (confirmDelete) {
            todoItem.remove();
            saveTodos();
        }
    });

    todoList.insertBefore(todoItem, todoList.firstChild);

    if (save) saveTodos();
}

newTodoButton.addEventListener('click', function () {
    const newTodo = prompt('Enter your new To-Do:');
    if (newTodo && newTodo.trim() !== '') {
        addTodoToDOM(newTodo.trim());
    } else {
        alert('Error :( Please enter a valid To-Do!');
    }
});

loadTodos();
