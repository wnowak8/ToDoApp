const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    {
        name: "Go to the gym ",
        isDone: false
    },
    {
        name: "Go to the shopping ",
        isDone: false
    },
    {
        name: "Clean room ",
        isDone: false
    }
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.isDone;
        checkboxElement.addEventListener("change", () => {
            task.isDone = !task.isDone;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, isDone: false });
    render();
});
addTask({ name: "Do sth", isDone: true });
render();
