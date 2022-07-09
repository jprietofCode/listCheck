//función
const checkComplete =(id) =>{
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => completeTask(event, id))
    return i;
};
//Immediately invoked function expression IIFE, codgio al inicio 
const completeTask = (event, id) =>{
    const element = event.target;
    //element.classList.add("fas", "completeIcon");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    //element.classList.remove("far");
    element.classList.toggle("far");
    // check complete list
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id === id);
    tasks[index]['complete'] = !tasks[index]['complete'];
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default checkComplete;