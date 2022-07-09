import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcons.js";
import { readTasks } from "./readTasks.js";
export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const date = calendar.value;  // obtner el valor ingresado
    const value = input.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');  // usando libreria ext para estarizar fecha

    if(value === "" || date===""){
        return;
    }
    //const list = document.querySelector("[data-list]")
    input.value = "";
    calendar.value = "";
    //check de tarea realizada
    const complete = false;
    const taskObj = {
        value,
        dateFormat,
        complete,
        id:uuid.v4()
    };
    list.innerHTML = "";
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObj);
    // maneter info mietras la pestaña esta abierta
    //sessionStorage.setItem('tasks', JSON.stringify(taskObj));
    localStorage.setItem('tasks', JSON.stringify(taskList));  // guarda información localmente
    
    readTasks(); //displayTasks
    /*const task = createTask(taskObj)
    list.appendChild(task);*/
}


//Arrow function ó funciones anonimas
// crear la estructura HTML
export const createTask = ({value, dateFormat, complete, id}) =>{
    const task = document.createElement('li');
          task.classList.add('card');
    const check = checkComplete(id)
    const taskContent = document.createElement("div");
          taskContent.appendChild(check);
    
    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
    const titleTask = document.createElement("span");
          titleTask.classList.add("task");
          titleTask.innerText = value;
            // Agregar a las listas de tareas
          taskContent.appendChild(titleTask);
            //task.innerHTML=content;
    const dateElement = document.createElement("span");
          dateElement.innerHTML = dateFormat;
          task.appendChild(taskContent);
          task.appendChild(dateElement);  // Ingresa elemento
          task.appendChild(deleteIcon(id));
          //list.appendChild(task)
    return task;
}