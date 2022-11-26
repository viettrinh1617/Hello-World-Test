//Declare dom:
const filterTask = document.querySelector("#filterBtn");
const taskList = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");

//filter tasks:
filterTask.addEventListener("click", (e) => {
    const taskItems = document.querySelectorAll(".taskList li");
    taskItems.forEach(item => {
        if(item.classList.contains("task-done")) {
            item.style.display = "none";
            if(e.target.checked) {item.style.display = "none";}
            else {item.style.display = "flex";}
        }
    console.log(item.style.display);
    });
})

//mark tasks as done and remove tasks:
const markDone = (task) => {
    task.classList.toggle("task-done");
};

const markDelete = (task) => {
    task.classList.add("task-delete");
    task.addEventListener("transitionend", () => {
        task.remove();
    })
};

taskList.addEventListener("click", (e)=> {
    const element = e.target;
    console.log(element);
    if(element.classList.contains("checkbox-done")){
        markDone(element.parentNode.parentNode);
        console.log(element.parentNode.parentNode);
    }
    if(element.classList.contains("deleteTask")){
        markDelete(element.parentNode.parentNode);
        console.log(element.parentNode.parentNode);
    }
})

//insert new tasks:
addTaskBtn.addEventListener("click", (e) => {
const x = document.createElement("li");
x.innerHTML = `
    <li class="task">
    <div class="taskTitle">${taskInput.value}</div>
    <div class="taskBtnGroup">
        <input type="checkbox" class="checkbox checkbox-done">
        <button class="deleteTask">X</button>
    </div>
    </li>
`
taskList.appendChild(x);
taskInput.value = "";
});