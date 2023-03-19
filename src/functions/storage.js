import { ToDoItems } from "./addItem";
import { ListBlueprint } from "./addList";
import { TodoList } from "./addProject";

const projects = new TodoList();
const list = new ListBlueprint();
const todos = new ToDoItems();

list.tasks.push(todos);
projects.projects.push(list);

function save(obj){
    if(localStorage.getItem('data' == null)){
        localStorage.setItem('data', '[]');
    }
    localStorage.setItem()
}

function view(){

}


