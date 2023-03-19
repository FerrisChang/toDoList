import '../styles/univSubPage.css';
import addListBtn from '../functions/addProject'; 



function subPage(pageTitle, addButton) {
    const container = document.getElementById('toDoItems');

    const parentContainer = document.createElement('div');
    parentContainer.id = 'parentContainer';
    container.appendChild(parentContainer);

    const title = document.createElement('p');
    title.id = 'universalId';
    title.textContent = pageTitle;

    const childContainer = document.createElement('div');
    childContainer.id = 'childContainer';

    parentContainer.appendChild(title);
    parentContainer.appendChild(childContainer);

    if(addButton === true){
        const childDivContainer = document.getElementById('childContainer');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.id = 'addTaskBtn';
        addTaskBtn.textContent = '+ Add Task';
        childDivContainer.appendChild(addTaskBtn);
        addTaskBtn.addEventListener('click', ()=> {
            addListBtn('child');
        })
    } else {
        const childDivContainer = document.getElementById('childContainer');
        childDivContainer.textContent = '';
    }
}

export default subPage;