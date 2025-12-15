let input = document.querySelector("input");
let button = document.getElementById("addBtn");
let taskList = document.querySelector(".taskList");

window.onload = function () {
    showTask();
};

button.onclick = addTask;

// ---------------- Add Task ----------------
function addTask() {
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    showTask();
}

// ---------------- Show Tasks ----------------
function showTask() {
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="taskText ${item.completed ? "completedTask" : ""}">
                ${item.text}
            </span>

            <span class="cmplBtn" onclick="toggleComplete(${index})">Done</span>
            <span class="editBtn" onclick="editTask(${index})">Edit</span>
            <span class="delBtn" onclick="delTask(${index})">X</span>
        `;

        taskList.appendChild(li);   
    });
}

// // ---------------- Delete Task ----------------
// function delTask(i) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.splice(i, 1);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     showTask();
// }

// // ---------------- Complete Task ----------------
// function toggleComplete(i) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     tasks[i].completed = !tasks[i].completed;

//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     showTask();
// }

// // ---------------- Edit Task ----------------
// function editTask(i) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//     input.value = tasks[i].text;
//     button.textContent = "Update Task";

//     let newButton = button.cloneNode(false);
//     button.parentElement.replaceChild(newButton, button);
//     button = newButton;

//     button.onclick = function () {
//         let updated = input.value.trim();

//         if (updated === "") {
//             alert("Please enter something");
//             return;
//         }

//         tasks[i].text = updated;

//         localStorage.setItem("tasks", JSON.stringify(tasks));

//         input.value = "";
//         button.textContent = "Add Task";
//         button.onclick = addTask;
//         showTask();
//     };
// }
