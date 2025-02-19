export class Task {
    constructor(title, description, dueDate, priority, 
        listName
    ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listName = listName;
    }
    printTask() {
        console.log(this.title);
        console.log(this.description)
    }

}
export let taskArray = [];

export function pushTask(task) {
    taskArray.push(task)
}
export function createTask(title, description, dueDate, priority, 
    listName) {
    let task = new Task (title, description, dueDate, priority, 
        listName);
    pushTask(task);
}