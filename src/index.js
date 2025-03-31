import "./styles.css";
import { Task } from "./myTasks";
import { taskArray } from "./myTasks";
import { pushTask } from "./myTasks";
import { createTask } from "./myTasks";
import { container } from "./dom";
import { contentDomUpdate } from "./dom";
import { updateLists } from "./dom";
import { taskLists } from "./myTasks";
import { indexTask } from "./myTasks";


createTask("School", "Finish homework", "09.04.2025", "High", "My Tasks");
createTask("Moon", "Moon", "tomorrow", "low", "My Favourite Movies");
createTask("Buy clothes", "Need new winter clothes", "01.03.2025", "medium", "Home")
createTask("Japan", "Kyoto", "31.07.2026", "medium", "Dream Holidays")

contentDomUpdate();
updateLists();

function createNewList(listName) {
    if (taskLists.includes(listName)) {
        return;
    } else {
        taskLists.push(listName)
    }
    updateLists();
}
createNewList("Johnny")
const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(newTaskForm.children);
    //createTask()
})



//removeTask(1)

