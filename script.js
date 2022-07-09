/*
insertBefore(padre, hijo): Coloca un nodo antes del otro
replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
removeChild(elemento): Remueve un nodo del árbol
*/
//(() => {
import { readTasks } from "./components/readTasks.js";
import { addTask } from "./components/addTask.js";
const btn = document.querySelector('[data-form-btn]');



btn.addEventListener("click", addTask)
readTasks();
//Aqui iba checkComplete

//Aquí iba deleteIcon
//})();