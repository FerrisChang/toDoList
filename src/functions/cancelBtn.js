import addListBtn from "./addProject";

function cancelFunction(location) {
    if(location === 'sideBar') {
        const removeSideForm = document.getElementById('listForm');
        const sideContainer = document.getElementById('projectNames');
        sideContainer.removeChild(removeSideForm);
        const addBtn = document.createElement('button');
        addBtn.id = 'addProjects';
        addBtn.textContent = '+ Add Project';
        sideContainer.appendChild(addBtn);
        addBtn.addEventListener('click', () => {
                addListBtn('sideBar');
        });
    } else if(location === 'child') {
        const removeChildForm = document.getElementById('taskForm');
        const childContainer = document.getElementById('childContainer');
        childContainer.removeChild(removeChildForm);
        const addBtn = document.createElement('button');
        addBtn.id = 'addTaskBtn';
        addBtn.textContent = '+ Add Task';
        childContainer.appendChild(addBtn);
        addBtn.addEventListener('click', () => {
                addListBtn('child');
        });
    } else {
        return undefined;
    }
}
export default cancelFunction;
