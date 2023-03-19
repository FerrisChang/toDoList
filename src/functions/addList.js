import cancelFunction from "./cancelBtn";
import subPage from "../pages/univSubPage";
import clear from "./clearSubPg";
import { TodoList } from "./addProject";

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

export default function addList(){
    const theLists = new ListBlueprint();
    const exportClass = new TodoList();

    theLists.setName = document.getElementById('inputs').value;
    const projectNames = document.getElementById('projectNames');
    const listBtn = document.createElement('button');
    listBtn.id = 'button-project'
    const listPara = document.createElement('p');
    listPara.textContent = theLists.getName;
    listPara.id = theLists.getName;
    

    exportClass.projects.push(theLists);
    projectNames.appendChild(listBtn);
    listBtn.appendChild(listPara);
    console.table(theLists)


    listBtn.addEventListener('click', ()=> {
        clear();
        subPage(theLists.getName, true);
    })

    
    cancelFunction('sideBar');
    
}

