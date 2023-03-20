
import { isWithinInterval, parse, format, isValid, isMatch } from 'date-fns'



export default class Project{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.toDos = [];
    }
    appendToDo(toDo){
        this.toDos.push(toDo);
    }

    getAllToDosInInterval(interval){
        return this.toDos.filter(
            (toDo) =>!toDo.date || isWithinInterval(toDo.date, interval)
        )
    }
}

export class ToDoItems{
    constructor(name, isFinished, date, priority){
        this.name = name;
        this.isFinished = isFinished;
        this.date = date;
        this.priority = priority;
    }
    set date(newDate){
        this.dueDate = typeof newDate === "string" ? parse(newDate, "yyyy-MM-dd", new Date()) : newDate;
    }
    get date(){
        return this.dueDate;
    }
    get dateString(){
        return isValid(this.date) ? format(this.date, "yyyy-MM-dd") : "";
    }
    static isEnteredDateValid(dateToCheck){
        return isMatch(dateToCheck, "yyyy-MM-dd");
    }
}

export class ListBlueprint{
    constructor(name){
        this.name = name
        this.tasks = [];
    }
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }
    set setTasks(tasks) {
        this.tasks = tasks
    }
    get getTasks(){
        return this.tasks;
    }
}

export class TodoList {
    constructor() {
    this.projects = [];
    }
    set setProjects(projects) {
        this.projects = projects;
    }
    get getProjects() {
        return this.projects;
    }
}