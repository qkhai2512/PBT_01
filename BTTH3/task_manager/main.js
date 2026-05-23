let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const taskForm = document.getElementById("taskForm");

const taskModal = document.getElementById("taskModal");

const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const taskId = document.getElementById("taskId");

const title = document.getElementById("title");

const description = document.getElementById("description");

const deadline = document.getElementById("deadline");

const priority = document.getElementById("priority");

const message = document.getElementById("message");

/* OPEN MODAL */

openModalBtn.addEventListener("click", () => {

    taskModal.classList.add("active");

});

/* CLOSE MODAL */

closeModalBtn.addEventListener("click", () => {

    taskModal.classList.remove("active");

});

/* SAVE TASK */

taskForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const taskData = {

        id: taskId.value || Date.now(),

        title: title.value,

        description: description.value,

        deadline: deadline.value,

        priority: priority.value,

        completed: false

    };

    if(taskId.value) {

        tasks = tasks.map(task =>

            task.id == taskId.value ? taskData : task
        );

        showMessage("Task updated successfully");

    } else {

        tasks.push(taskData);

        showMessage("Task added successfully");
    }

    saveTasks();

    renderTasks();

    updateStats();

    taskForm.reset();

    taskModal.classList.remove("active");

});

/* RENDER TASKS */

function renderTasks() {

    taskList.innerHTML = "";

    if(tasks.length === 0) {

        taskList.innerHTML = `
            <tr>
                <td colspan="6">
                    No tasks available
                </td>
            </tr>
        `;

        return;
    }

    tasks.forEach(task => {

        taskList.innerHTML += `
        
            <tr class="${task.completed ? "completed" : ""}">

                <td>
                    <input
                        type="checkbox"
                        onchange="toggleTask(${task.id})"
                        ${task.completed ? "checked" : ""}
                    >
                </td>

                <td>${task.title}</td>

                <td>${task.description}</td>

                <td>${task.deadline}</td>

                <td class="priority-${task.priority.toLowerCase()}">
                    ${task.priority}
                </td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editTask(${task.id})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteTask(${task.id})"
                    >
                        Delete
                    </button>

                </td>

            </tr>
        
        `;
    });

}

/* DELETE TASK */

function deleteTask(id) {

    const confirmDelete = confirm("Are you sure?");

    if(confirmDelete) {

        tasks = tasks.filter(task => task.id !== id);

        saveTasks();

        renderTasks();

        updateStats();

        showMessage("Task deleted");
    }

}

/* EDIT TASK */

function editTask(id) {

    const task = tasks.find(task => task.id === id);

    taskId.value = task.id;

    title.value = task.title;

    description.value = task.description;

    deadline.value = task.deadline;

    priority.value = task.priority;

    taskModal.classList.add("active");

}

/* TOGGLE TASK */

function toggleTask(id) {

    tasks = tasks.map(task => {

        if(task.id === id) {

            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();

    renderTasks();

    updateStats();

}

/* UPDATE STATS */

function updateStats() {

    totalTasks.innerText = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    completedTasks.innerText = completed;

    pendingTasks.innerText = tasks.length - completed;

}

/* SAVE LOCAL STORAGE */

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

/* MESSAGE */

function showMessage(text) {

    message.innerText = text;

    message.style.display = "block";

    setTimeout(() => {

        message.style.display = "none";

    }, 2000);

}

/* INITIAL */

renderTasks();

updateStats();