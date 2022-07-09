import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";
export const readTasks = () => {
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; // || pipe
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    
    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        //console.log(dateMoment);
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            console.log(diff);
            if(diff === 0){
                list.appendChild(createTask(task));
            }
        });  
    });
       
}   