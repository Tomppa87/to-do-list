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
    indexTask();
}

export let taskLists = [];

export function createNewList(listName) {
    if (taskLists.includes(listName)) {
        return;
    } else {
        taskLists.push(listName)
    }
    updateTaskList();
    
}

export function updateTaskList() {
    for (let i=0;i<taskArray.length; i++) {
        if (taskLists.includes(taskArray[i].listName) == false) {
            taskLists.push(taskArray[i].listName)
            console.log(taskArray[i].listName)
        }
    }
}


