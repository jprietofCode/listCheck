/*
insertBefore(padre, hijo): Coloca un nodo antes del otro
replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
removeChild(elemento): Remueve un nodo del árbol
*/
(() => {
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
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML=content;
    task.appendChild(taskContent)
    list.appendChild(task)
}

btn.addEventListener("click", createTask)

//función
const checkComplete =() =>{
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask)
    return i;
};
//Immediately invoked function expression IIFE, codgio al inicio 
const completeTask = (event) =>{
    const element = event.target;
    //element.classList.add("fas", "completeIcon");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    //element.classList.remove("far");
    element.classList.toggle("far");
}
})();