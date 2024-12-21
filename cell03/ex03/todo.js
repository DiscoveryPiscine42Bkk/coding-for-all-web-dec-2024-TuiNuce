const todoList = document.getElementById('ft_list');
const newTodoButton = document.getElementById('new-todo');

function loadTodos() {
    const todos = localStorage.getItem('todos'); // ดึงข้อมูลจาก Local Storage
    if (todos) {
        try {
            const todosArray = JSON.parse(todos); // แปลงข้อมูล JSON เป็น Array
            todosArray.reverse().forEach(todo => { // ใช้ reverse() เพื่อให้รายการล่าสุดอยู่บนสุด
                addTodoToDOM(todo, false); // เพิ่ม To-Do ลงใน DOM โดยไม่บันทึกซ้ำ
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
        todos.push(item.textContent); // เก็บข้อความของทุก To-Do
    });
    localStorage.setItem('todos', JSON.stringify(todos)); // บันทึกลง Local Storage
}

function addTodoToDOM(todoText, save = true) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    todoItem.addEventListener('click', function () {
        const confirmDelete = confirm('Do you want to remove this To-Do?');
        if (confirmDelete) {
            todoItem.remove();
            saveTodos(); // บันทึกหลังจากการลบ
        }
    });

    todoList.insertBefore(todoItem, todoList.firstChild); // เพิ่มที่ด้านบนสุดของรายการ

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
