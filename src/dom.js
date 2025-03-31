export const container = document.getElementById("contentCards");
export const contentHead = document.getElementById("content_Head");
export const toDoLists = document.getElementById("toDoLists");
export const add_btn = document.getElementById("add_btn");
export const cancelTaskBtn = document.getElementById("cancelTaskBtn");

import { taskArray } from "./myTasks";
import { taskLists } from "./myTasks";
//import { removeTask } from "./index";
import { indexTask } from "./myTasks";
import { createTask } from "./myTasks";


function removeTask(index) {
    taskArray.splice(index,1);
    contentDomUpdate();
};

export function contentDomUpdate(filter) {
    // remove previous view by removing container children
    indexTask();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // go through all taskArray entries and create taskCard for each entry
    for (let i = 0; i < taskArray.length; i++) {        
        const task = taskArray[i];
        const taskCard = document.createElement("div")
        if  (filter === undefined || filter === "My Tasks") {
            // go through each property in all entries 
                for (let prop in taskArray[i]) {
                    let taskCardProperty = document.createElement("span");
                    taskCardProperty.classList.add(prop)
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
            }
        else if (taskArray[i].listName === filter) {
        // go through each property in filtered entry 
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
        }
            else {
                continue
            }
        let cardBtns = document.createElement("div");
        let editBtn = document.createElement("button"); 
        editBtn.innerHTML = "Edit"
        let completeBtn = document.createElement("button");
        completeBtn.innerHTML = "Complete"
        let removeBtn = document.createElement("button") 
        removeBtn.innerHTML = "Delete";
        removeBtn.addEventListener("click", function(e) {
            let index = e.target.parentElement.parentElement.querySelector("span.index").innerHTML
            console.log(index)
            removeTask(index)
            
        })
        cardBtns.appendChild(editBtn); 
        cardBtns.appendChild(completeBtn);
        cardBtns.appendChild(removeBtn); 
        taskCard.appendChild(cardBtns)
    container.appendChild(taskCard)
    }
    
}
export function updateListsDOM() {
    while (toDoLists.firstChild) {
        toDoLists.removeChild(toDoLists.firstChild);
    }
    const myTasks = document.createElement("li");
    myTasks.innerHTML = "My Tasks"
    for (let i = 0; i < taskLists.length; i++) {        
        const task = document.createElement("li")
        task.innerHTML = taskLists[i];
        toDoLists.appendChild(task)
    }
}
toDoLists.addEventListener("click", function(e) {
    contentDomUpdate(e.target.innerHTML)
})

let select = document.getElementById("to_do_list")
function dropDownPopulate() {
    for (let i=0; i<taskLists.length; i++) {
        let option = taskLists[i];
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        select.appendChild(el);        
    }
}
function dropDownEmpty() {
    while (select.firstChild) {
        select.removeChild(select.firstChild)
    }
}

const dialog = document.getElementById("dialogFormTask")
add_btn.addEventListener("click", () => {
    dropDownPopulate();
    dialog.showModal();
})
cancelTaskBtn.addEventListener("click", () => {
    dropDownEmpty();
    dialog.close();
})

function getRadioButtonValue() {
    if (document.getElementById("priorityHigh").checked) {
        return "High"
    }    
    else if (document.getElementById("priorityMedium").checked) {
        return "Medium"
    }
    else if (document.getElementById("priorityLow").checked) {
        return "Low"
    }
    else {
        return "None"
    }
}


newTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let newTaskTitle = document.getElementById("title").value
    let newTaskDescription = document.getElementById("description").value
    let newTaskDate = document.getElementById("dueDate").value
    let newTaskListName = document.getElementById("to_do_list").value
    console.log(getRadioButtonValue())
    createTask(newTaskTitle, newTaskDescription, newTaskDate, getRadioButtonValue(),newTaskListName)
    contentDomUpdate()
    dialog.close();
})
/*
export const newTaskBtn = document.getElementById("newTaskBtn");
export const newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(newTaskForm.children);
    //createTask()
})*/