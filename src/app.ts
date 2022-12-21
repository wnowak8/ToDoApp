const taskNameInputElement: HTMLInputElement= document.querySelector("#name");
const addButtonElement: HTMLButtonElement= document.querySelector("button");
const tasksContainerElement: HTMLElement= document.querySelector(".tasks");

interface Task{
    name: string;
    isDone: boolean;
    category?: 'general'|'work'|'gym'|'hobby';
    
}
const categories: string[]=['general','work','gym','hobby']
const tasks: Task[] = [
{
    name: "Go to the gym ",
    isDone: false,
    category: 'gym'
},
{
    name: "Go to the shopping ",
    isDone: false
},
{
    name: "Top5",
    isDone: false,
    category: 'work'
}
];

const render = () =>{
    tasksContainerElement.innerHTML="";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement= document.createElement("li");
        if (task.category){
            taskElement.classList.add(task.category);
        }
        const id: string=`task-${index}`;
        const labelElement: HTMLLabelElement= document.createElement("label");
        labelElement.innerText=task.name;
        labelElement.setAttribute("for",id);

        const checkboxElement: HTMLInputElement=document.createElement("input");
        checkboxElement.type="checkbox";
        checkboxElement.name=task.name;
        checkboxElement.id=id;
        checkboxElement.checked=task.isDone;
        checkboxElement.addEventListener("change", () =>{
            task.isDone= !task.isDone;
        });

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask= (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) =>{
    event.preventDefault();
    addTask({name: taskNameInputElement.value, isDone: false});
    render();
});
addTask({name:"Do sth", isDone: true});
render();