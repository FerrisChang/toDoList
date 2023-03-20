import cancelFunction from "./cancelBtn";
import subPage from "../pages/univSubPage";
import clear from "./clearSubPg";



export default function addList(){
    const theLists = new ListBlueprint();

    theLists.setName = document.getElementById('inputs').value;
    const projectNames = document.getElementById('projectNames');
    const listBtn = document.createElement('button');
    listBtn.id = 'button-project'
    const listPara = document.createElement('p');
    listPara.textContent = theLists.getName;
    listPara.id = theLists.getName;
    
    projectNames.appendChild(listBtn);
    listBtn.appendChild(listPara);
    console.table(theLists)


    listBtn.addEventListener('click', ()=> {
        clear();
        subPage(theLists.getName, true);
    })

    
    cancelFunction('sideBar');
    
}

