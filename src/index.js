import "./styles.css";
import { Task } from "./myTasks";
import { taskArray } from "./myTasks";
import { pushTask } from "./myTasks";
import { createTask } from "./myTasks";
import { container } from "./dom";
import { contentDomUpdate } from "./dom";
import { updateListsDOM } from "./dom";
import { newTaskBtn } from "./dom";
import { newTaskForm } from "./dom";
import { taskLists } from "./myTasks";
import { indexTask } from "./myTasks";
import { createNewList } from "./myTasks";
import { updateTaskList } from "./myTasks";


createTask("School", "Finish homework", "09.04.2025", "High", "My Tasks");
createTask("Moon", "Moon", "tomorrow", "low", "My Favourite Movies");
createTask("Buy clothes", "Need new winter clothes", "01.03.2025", "medium", "Home")
createTask("Japan", "Kyoto", "31.07.2026", "medium", "Dream Holidays")

contentDomUpdate();
//updateLists();
//createNewList("Johnny")
updateTaskList();
updateListsDOM();

console.log(taskLists)





