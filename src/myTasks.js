export let taskArray = [];

export function pushTask(task) {
    taskArray.push(task)    
}

export function indexTask() {
    for (let i=0; i<taskArray.length; i++) {
        taskArray[i].index = i;
    }
}

export class Task {
    constructor(title, description, dueDate, priority, 
        listName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listName = listName;
    }
}

export function createTask(title, description, dueDate, priority, 
    listName) {
    let task = new Task (title, description, dueDate, priority, 
        listName);
    pushTask(task);
    populateStorage();
    indexTask();
}

export let taskLists = [];
export let completedTasks = [];

export function completeTask(task) {
    completedTasks.push(task)
    taskArray.splice(task.index,1);  
    populateStorage();  
}

export function createNewList(listName) {
    if (taskLists.includes(listName)) {
        return;
    } else {
        taskLists.push(listName)
    }
    populateStorage();
    updateTaskList();
    
}

export function updateTaskList() {
    getFromStorage();
    for (let i=0;i<taskArray.length; i++) {
        if (taskLists.includes(taskArray[i].listName) == false) {
            taskLists.push(taskArray[i].listName)
            console.log(taskArray[i].listName)
        }
    }
    populateStorage(); 
}

export function populateStorage() {
    let storageTaskArray = taskArray;
    let storageTaskArrayJSON = JSON.stringify(storageTaskArray);
    let storageListArray = taskLists;
    let storageListArrayJSON = JSON.stringify(storageListArray);
    let storageCompletedArray = completedTasks;
    let storageCompletedArrayJSON = JSON.stringify(storageCompletedArray);
    localStorage.setItem("tasks", storageTaskArrayJSON)
    localStorage.setItem("lists", storageListArrayJSON)
    localStorage.setItem("completed", storageCompletedArrayJSON)
}

export function getFromStorage() {
    let taskArrayToParse = localStorage.getItem("tasks")
    let taskArrayParsed = JSON.parse(taskArrayToParse)    
    let listArrayToParse = localStorage.getItem("lists")    
    let listArrayParsed = JSON.parse(listArrayToParse)
    let completedArrayToParse = localStorage.getItem("completed")
    let completedArrayParsed = JSON.parse(completedArrayToParse)
    if (!taskArrayToParse && !listArrayToParse) {
        taskArray = [];
        taskLists = [];
    }
    else if (!listArrayToParse) {
        taskArray = taskArrayParsed;
        taskLists = [];
    }
    else if (!taskArrayToParse) {
        taskArray = [];
        taskLists = listArrayParsed;
    }
    else {
        taskArray = taskArrayParsed;
        taskLists = listArrayParsed;
    }
    if (!completedArrayToParse) {
        completedTasks = []
    } else {
        completedTasks = completedArrayParsed
    }
    
    
    
}


