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

export default checkComplete;