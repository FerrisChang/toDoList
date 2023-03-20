import addItem from "./addToDoItem";
import addList from "./addList";
import cancelFunction from "./cancelBtn";




export default function addListBtn(location) {
    if(location === 'sideBar') {
        const container = document.getElementById('projectNames');
        const form = document.createElement('form');
        form.id = 'listForm';
        const userInput = document.createElement('input');
        userInput.type = 'text';
        userInput.id = 'inputs';
        userInput.value = 'List Name';
        const buttonBox = document.createElement('div');
        buttonBox.id = 'box';
        const submit = document.createElement('button');
        submit.id = 'submit';
        submit.textContent = "Add";
        submit.type = 'button';
        const cancel = document.createElement('button');
        cancel.id = 'cancel';
        cancel.textContent = "Cancel";
        cancel.type = 'button';
    
        buttonBox.appendChild(submit);
        buttonBox.appendChild(cancel);
        form.appendChild(userInput);
        form.appendChild(buttonBox);
        container.appendChild(form);

        const formContainer = document.getElementById('projectNames');
        const removeBtn = document.getElementById('addProjects');
        formContainer.removeChild(removeBtn);

        const stopRefresh = document.getElementById('listForm');
        function submitForm(event){
            event.preventDefault();
            }
        stopRefresh.addEventListener('submit', submitForm);

        const addListBtn = document.getElementById('submit');
        addListBtn.addEventListener('click', () => {
            addList();
        });
        const cancelBtn = document.getElementById('cancel');
        cancelBtn.addEventListener('click', () => {
            cancelFunction('sideBar');
        });
    } else if(location === 'child'){
        const container = document.getElementById('childContainer');
        const form = document.createElement('form');
        form.id = 'taskForm';
        const userInput = document.createElement('input');
        userInput.type = 'text';
        userInput.id = 'item-name';
        userInput.value = 'Item Name';
        const description = document.createElement('input');
        description.type = 'text';
        description.id = 'description';
        description.value = 'Description'
        const dueDate = document.createElement('input');
        dueDate.type = 'date';
        dueDate.id = 'due';
        dueDate.value = '2018-07-22';
        const priority = document.createElement('input');
        priority.type = 'number';
        priority.id = 'number';
        priority.value = '0';
        priority.min = '0';
        priority.max = '5';
        const buttonBox = document.createElement('div');
        buttonBox.id = 'box';
        const submit = document.createElement('button');
        submit.id = 'add';
        submit.textContent = "Add";
        submit.type = 'button';
        const cancel = document.createElement('button');
        cancel.id = 'cancel';
        cancel.textContent = "Cancel";
        cancel.type = 'button';
    
        buttonBox.appendChild(submit);
        buttonBox.appendChild(cancel);
        form.appendChild(userInput);
        form.appendChild(description);
        form.appendChild(dueDate);
        form.appendChild(priority);
        form.appendChild(buttonBox);
        container.appendChild(form);

        const fromContainer = document.getElementById('childContainer');
        const removeBtn = document.getElementById('addTaskBtn');        
        fromContainer.removeChild(removeBtn);

        const stopRefresh = document.getElementById('taskForm');
        function submitForm(event){
            event.preventDefault();
        }
        stopRefresh.addEventListener('submit', submitForm);

        const addListBtn = document.getElementById('add');
        addListBtn.addEventListener('click', () => {
            addItem();
        });

        const cancelBtn = document.getElementById('cancel');
        cancelBtn.addEventListener('click', () => {
            cancelFunction('child');
        });
    } else {
        return undefined;
    }
}
