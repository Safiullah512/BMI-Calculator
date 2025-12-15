let input = document.querySelector("input")
let button = document.querySelector("button");
let taskList = document.querySelector(".taskList");

window.onload = function () {
    showtask();
}

button.onclick = addTask;

function addTask() {
    let taskinput = input.value.trim();
    if (taskinput === "") {
        alert("Plzz Enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({
        text: taskinput,
        complete: false
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    showtask();
}

function showtask() {
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
        <span class="taskText ${item.complete ? "completedTask" : ""}">${item.text}</span>
        <span class="editBtn" onclick="editTask(${index})">Edit</span>
        <span class="delBtn" onclick="delTask(${index})">X</span>
        <span class="cmplBtn" onclick="doneTask(${index})">Done</span>
        `;
        taskList.appendChild(li);
    });
}

function editTask(i) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    input.value = tasks[i] ;
    button.textContent = "Update Task";

    let newButton = button.cloneNode(true);
    button.parentElement.replaceChild(newButton, button);
    button = newButton;

    button.onclick = function () {
        let taskinput = input.value.trim();
        if (taskinput === "") {
            alert("Plzzz Enter a task");
            return;
        }

        tasks[i].text=taskinput;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        input.value = "";
        button.textContent = "Add Task";
        button.onclick=addTask;
        showtask();
    }

}

function delTask(i){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.splice(i,1);

    localStorage.setItem("tasks",JSON.stringify(tasks));

    showtask();
}

function doneTask(i){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

    tasks[i].complete=!tasks[i].complete;

    localStorage.setItem("tasks",JSON.stringify(tasks));
    showtask();
}
