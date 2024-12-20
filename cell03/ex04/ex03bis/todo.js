$(document).ready(function () {
    const storageKey = "todos";

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem(storageKey) || "[]");
        todos.forEach(todo => addTodoToDOM(todo, false));
    }

    function saveTodos() {
        const todos = [];
        $("#ft_list").children().each(function () {
            todos.push($(this).text());
        });
        localStorage.setItem(storageKey, JSON.stringify(todos));
    }

    function addTodoToDOM(todoText, save = true) {
        const todoItem = $("<div>").addClass("todo-item").text(todoText);
        todoItem.on("click", function () {
            if (confirm("Do you want to remove this To-Do?")) {
                $(this).remove();
                saveTodos();
            }
        });
        $("#ft_list").prepend(todoItem);
        if (save) saveTodos();
    }

    $("#new-todo").on("click", function () {
        const newTodo = prompt("Enter your new To-Do:");
        if (newTodo && newTodo.trim() !== "") {
            addTodoToDOM(newTodo.trim());
        } else {
            alert("Error :( Please enter a valid To-Do!");
        }
    });

    loadTodos();
});