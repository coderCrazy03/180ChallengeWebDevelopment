let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function add() {
  let tasksText = taskInput.value.trim();
  if (tasksText != "") {
    tasks.push(tasksText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    show();
    taskInput.value = "";
  }
}

function remove(i) {
  if (i < tasks.length && i >= 0) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    show();
  }
}

function show() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("Button");
    listItem.textContent = task;
    removeButton.textContent = "x";
    removeButton.style =
      "background-color:red; background-color: red; border: none; border-radius: 2px;position: relative;left: 300px;height: 20px; width: 20px;";
    removeButton.onclick = () => remove(i);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  });
}

addTaskBtn.addEventListener("click", add);
show();
