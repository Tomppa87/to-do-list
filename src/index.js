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
import { listFilter } from "./dom";
import { populateStorage } from "./myTasks"
import { getFromStorage } from "./myTasks"

getFromStorage()

contentDomUpdate();
updateTaskList();
updateListsDOM();





