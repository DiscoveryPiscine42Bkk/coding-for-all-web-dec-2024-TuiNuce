// ดึงองค์ประกอบใน DOM
const todoList = document.getElementById('ft_list');
const newTodoButton = document.getElementById('new-todo');

// ฟังก์ชันสำหรับการโหลด To-Do จาก Local Storage
function loadTodos() {
    const todos = localStorage.getItem('todos'); // ดึงข้อมูลจาก Local Storage
    if (todos) {
        try {
            const todosArray = JSON.parse(todos); // แปลงข้อมูล JSON เป็น Array
            todosArray.forEach(todo => {
                addTodoToDOM(todo, false); // เพิ่ม To-Do ลงใน DOM โดยไม่บันทึกซ้ำ
            });
        } catch (error) {
            console.error("Failed to parse local storage:", error);
            alert("Error loading saved To-Do list.");
        }
    }
}

// ฟังก์ชันสำหรับการบันทึก To-Do ลงใน Local Storage
function saveTodos() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent); // เก็บข้อความของทุก To-Do
    });
    localStorage.setItem('todos', JSON.stringify(todos)); // บันทึกลง Local Storage
}

// ฟังก์ชันสำหรับการเพิ่ม To-Do ลงใน DOM
function addTodoToDOM(todoText, save = true) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    // ฟังก์ชันสำหรับการลบ To-Do
    todoItem.addEventListener('click', function () {
        const confirmDelete = confirm('Do you want to remove this To-Do?');
        if (confirmDelete) {
            todoItem.remove();
            saveTodos(); // บันทึกหลังจากการลบ
        }
    });

    // เพิ่ม To-Do ที่สร้างใหม่ที่ด้านบนสุด
    todoList.insertBefore(todoItem, todoList.firstChild);

    // บันทึก To-Do เมื่อเพิ่มใหม่ (ถ้าจำเป็น)
    if (save) saveTodos();
}

// ฟังก์ชันสำหรับการสร้าง To-Do ใหม่
newTodoButton.addEventListener('click', function () {
    const newTodo = prompt('Enter your new To-Do:');
    if (newTodo && newTodo.trim() !== '') {
        addTodoToDOM(newTodo.trim());
    } else {
        alert('Error :( Please enter a valid To-Do!');
    }
});

// โหลด To-Do ที่มีอยู่จาก Local Storage เมื่อหน้าโหลด
loadTodos();
