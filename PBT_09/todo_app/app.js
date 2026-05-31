const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const clearCompletedBtn =
document.getElementById("clearCompleted");

let todos =
JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function saveTodos(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount(){

    const activeTodos =
    todos.filter(todo => !todo.completed);

    todoCount.textContent =
    `${activeTodos.length} items left`;
}

function renderTodos(){

    todoList.innerHTML = "";

    let filteredTodos = [...todos];

    if(currentFilter === "active"){
        filteredTodos =
        todos.filter(todo => !todo.completed);
    }

    if(currentFilter === "completed"){
        filteredTodos =
        todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {

        const li =
        document.createElement("li");

        li.className = "todo-item";

        if(todo.completed){
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;

        li.innerHTML = `
            <div class="todo-left">
                <span class="todo-text">
                    ${todo.text}
                </span>
            </div>

            <button class="delete-btn">
                ❌
            </button>
        `;

        todoList.appendChild(li);
    });

    updateCount();
}

todoForm.addEventListener("submit", e => {

    e.preventDefault();

    const text =
    todoInput.value.trim();

    if(text === "") return;

    todos.push({
        id: Date.now(),
        text,
        completed:false
    });

    saveTodos();
    renderTodos();

    todoInput.value = "";
});

todoList.addEventListener("click", e => {

    const li =
    e.target.closest(".todo-item");

    if(!li) return;

    const id = Number(li.dataset.id);

    const todo =
    todos.find(t => t.id === id);

    if(e.target.classList.contains("delete-btn")){

        todos =
        todos.filter(t => t.id !== id);

    }else if(
        e.target.classList.contains("todo-text")
    ){

        todo.completed =
        !todo.completed;
    }

    saveTodos();
    renderTodos();
});

todoList.addEventListener("dblclick", e => {

    if(!e.target.classList.contains("todo-text"))
        return;

    const li =
    e.target.closest(".todo-item");

    const id =
    Number(li.dataset.id);

    const todo =
    todos.find(t => t.id === id);

    const input =
    document.createElement("input");

    input.value = todo.text;
    input.className = "edit-input";

    e.target.replaceWith(input);

    input.focus();

    input.addEventListener("keydown", ev => {

        if(ev.key === "Enter"){

            todo.text =
            input.value.trim();

            saveTodos();
            renderTodos();
        }
    });
});

document
.querySelectorAll("[data-filter]")
.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll("[data-filter]")
        .forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter =
        btn.dataset.filter;

        renderTodos();
    });
});

clearCompletedBtn
.addEventListener("click", () => {

    todos =
    todos.filter(todo => !todo.completed);

    saveTodos();
    renderTodos();
});

renderTodos();