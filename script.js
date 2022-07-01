/*
insertBefore(padre, hijo): Coloca un nodo antes del otro
replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
removeChild(elemento): Remueve un nodo del árbol
*/
//(() => {
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcons.js";
const btn = document.querySelector('[data-form-btn]');
//Arrow function ó funciones anonimas
const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
    //backticks
    const taskContent = document.createElement("div")
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML=content;
    task.appendChild(taskContent)
    task.appendChild(deleteIcon());
    list.appendChild(task)
}

btn.addEventListener("click", createTask)

//Aqui iba checkComplete

//Aquí iba deleteIcon
//})();