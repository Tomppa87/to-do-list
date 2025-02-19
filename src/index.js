import "./styles.css";
import { Task } from "./myTasks";
import { taskArray } from "./myTasks";
import { pushTask } from "./myTasks";
import { createTask } from "./myTasks";

createTask("School", "Finish homework", "09.04.2025", "High", "My Tasks");
createTask("Moon", "Moon", "tomorrow", "low", "My Favourite Movies");
createTask("Buy clothes", "Need new winter clothes", "01.03.2025", "medium", "Home")
createTask("Japan", "Kyoto", "31.07.2026", "medium", "Dream Holidays")
const container = document.getElementById("contentCards");
const contentHead = document.getElementById("content_Head");

function contentDomUpdate() {
    // go through all taskArray entries and create taskCard for each entry
    for (let i = 0; i < taskArray.length; i++) {        
        const task = taskArray[i];
        const taskCard = document.createElement("div")
        // go through each property in entry and 
        for (let prop in taskArray[i]) {
            let taskCardProperty = document.createElement("span");
            if (prop === "dueDate") {
                let taskCardText = document.createTextNode("Due date: "+taskArray[i][prop])
                taskCardProperty.appendChild(taskCardText)
                taskCard.appendChild(taskCardProperty)
            } else if (prop === "priority") {
                let taskCardText = document.createTextNode("Priority: " +taskArray[i][prop])
                taskCardProperty.appendChild(taskCardText)
                taskCard.appendChild(taskCardProperty)
            } else {
                let taskCardText = document.createTextNode(taskArray[i][prop])
                taskCardProperty.appendChild(taskCardText)
                taskCard.appendChild(taskCardProperty)
            }
                 
        }
        let cardBtns = document.createElement("div");
        let editBtn = document.createElement("button"); 
        editBtn.innerHTML = "Edit"
        let completeBtn = document.createElement("button");
        completeBtn.innerHTML = "Complete"
        let removeBtn = document.createElement("button") 
        removeBtn.innerHTML = "Delete";
        cardBtns.appendChild(editBtn); 
        cardBtns.appendChild(completeBtn);
        cardBtns.appendChild(removeBtn); 
        taskCard.appendChild(cardBtns)
    container.appendChild(taskCard)
            
        
        
        
    }
}
contentDomUpdate();
