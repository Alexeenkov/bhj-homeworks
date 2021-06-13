'use strict';

const todoList = document.getElementById("tasks__list");
const todoInput = document.getElementById("task__input");
const todoListAdd = document.getElementById("tasks__add");

todoListAdd.addEventListener("click", addTask);

function addTask(event) {
    if (event.type === "click") {
        event.preventDefault();
    }
    if ((event.code === "Enter" || event.type === "click") && todoInput.value !== "") {
        const containerTask = document.createElement("div");
        containerTask.classList.add("task");
        containerTask.innerHTML = `<div class="task__title">
                                    ${todoInput.value}
                                </div>
                                <a href="#" class="task__remove">&times;</a>`;
        todoList.appendChild(containerTask);
        todoInput.value = "";
        containerTask.querySelector(".task__remove").addEventListener("click", removeTask);
    }
}

function removeTask() {
    this.closest(".task").remove();
}