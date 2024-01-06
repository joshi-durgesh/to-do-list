"use strict";

const tasks = [];
const taskCompleted = [];

const addTaskBtn = document.getElementById("add-task-btn");
const performTaskList = document.getElementById("task-to-perform");

let id = 0;

function AddTask() {
  const taskToAdd = document.getElementById("task").value;
  if (taskToAdd === "") {
    return;
  }
  tasks.push({
    id: id,
    task: taskToAdd,
  });
  id += 1;

  performTaskList.innerHTML = "";
  for (const task of tasks) {
    const taskToPerform = `
    <div class="task-control" id="task-${task.id}">
        <input
            class="task-item"
            type="text"
            value="${task.task}"
            disabled
            id="task-item${task.id}"
        />
        <div>
            <button class="bi bi-pen edit-btn shadow" id="edit-btn${task.id}"></button>
            <button class="bi bi-check-lg check-btn shadow" id="check-btn${task.id}"></button>
            <button class="bi bi-x-lg close-btn shadow" id="close-btn${task.id}"></button>
        </div>
    </div>
    `;
    performTaskList.innerHTML += taskToPerform;
  }
  btnHandling();
}

function btnHandling() {
  for (const task of tasks) {
    const editBtn = document.getElementById(`edit-btn${task.id}`);
  }
}

addTaskBtn.addEventListener("click", AddTask);
