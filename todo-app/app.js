"use strict";
const todoInput = document.getElementById("todo-input");
const newTaskEl = document.getElementById("add-button");
const popupEl = document.getElementById("task_information");
const taskItemsEl = document.getElementById("listItems");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const tEl = document.getElementById("ad");
const classlistEl = document.getElementById("classlist");
const saveEl = document.getElementById("save");

const tasks = [];
let classnumber = 1;
let edit = false;
let x = 0;
const createTask = function () {
  if (todoInput.value) {
    const task = {};
    console.log(todoInput.value);
    task.name = todoInput.value;
    task.date = dateEl.value;
    task.time = timeEl.value;
    task.moreInfo = tEl.value;
    task.classList = classlistEl.value;
    edit == false ? (task.tasknumber = classnumber) : (task.tasknumber = x);
    const html = ` <div class= 'di${classnumber}' >
  <input type="checkbox" value= ${todoInput.value}/>  <span class='span${classnumber}' >${todoInput.value}</span>
  <button class="listItemsbutton${classnumber}" >Edit</button>
</div>`;
    taskItemsEl.insertAdjacentHTML("afterbegin", html);
    edit == false ? tasks.push(task) : (tasks[x - 1] = task);
    console.log(tasks);
    const editButton = document.querySelectorAll(
      `.listItemsbutton${classnumber}`
    );
    const span = document.querySelectorAll(`.span${classnumber}`);

    let spann = [...span].map((element) => element.textContent);

    // the edit button is located inside the crete task function in other to access the newly created html documents
    editButton.forEach((element) => {
      document.querySelectorAll(`.listItemsbutton${classnumber}`);
      element.classList.add(`${classnumber}`);
      element.addEventListener("click", (e) => {
        edit = true;
        console.log(edit);
        const num = Number(element.className.split(" ").splice(-1).join(""));
        const currentEdit = tasks.find((element) => element.tasknumber == num);
        console.log(currentEdit);

        x = currentEdit.tasknumber;
        todoInput.value = currentEdit.name;
        dateEl.value = currentEdit.date;
        timeEl.value = currentEdit.time;
        tEl.value = currentEdit.moreInfo;
        classlistEl.value = currentEdit.classList;
        //tasks.splice(x, 1);
        // ;

        const divs = document
          .querySelector(`.di${currentEdit.tasknumber}`)
          .remove();

        console.log(divs);

        popupEl.classList.remove("hidden");
        taskItemsEl.classList.add("hidden");
        console.log(element);
        console.log(spann);
      });
    });
    edit == false ? classnumber++ : classnumber;
  }
  console.log(classnumber);
};

newTaskEl.addEventListener("click", (e) => {
  e.preventDefault();
  popupEl.classList.remove("hidden");
  taskItemsEl.classList.add("hidden");
});

saveEl.addEventListener("click", () => {
  if (todoInput.value && edit === false) {
    popupEl.classList.add("hidden");
    taskItemsEl.classList.remove("hidden");
    createTask();
    todoInput.value = tEl.value = classlistEl.value = "";
  } else if (todoInput.value && edit === true) {
    popupEl.classList.add("hidden");
    taskItemsEl.classList.remove("hidden");
    createTask();
    todoInput.value = tEl.value = classlistEl.value = "";
    edit = false;
  }
});
