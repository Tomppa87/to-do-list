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
export let taskArray = [];

export function pushTask(task) {
    taskArray.push(task)    
}

export function indexTask() {
    for (let i=0; i<taskArray.length; i++) {
        taskArray[i].index = i;
    }
}

export function createTask(title, description, dueDate, priority, 
    listName) {
    let task = new Task (title, description, dueDate, priority, 
        listName);
    pushTask(task);
}

export let taskLists = ["My Tasks", "My Favourite Movies", "Home", "Dream Holidays"];

