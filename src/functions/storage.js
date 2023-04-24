import { forEach } from "lodash";

//saves the project list to localstorage only.
export function save() {
    let new_data = document.getElementById('Lname').value;
    if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]')
    }

    let old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data))
} 

//will convert the localstorage array parsing it to display on the page.
export function view() {
    if(localStorage.getItem != null){
        const storedLists = JSON.parse(localStorage.getItem('data'));
        storedLists.forEach(item => {
            console.log(item)
            const LIST_CONTAINER = document.getElementById('projectList');
            const ListButton = document.createElement('button');
            ListButton.innerText = item;
            ListButton.id = 'lists'
            LIST_CONTAINER.appendChild(ListButton);
            ListButton.addEventListener('click', () => {
                appendToDoButton();
            })
        })
    }
}

function appendToDoButton() {
    const todoItems = document.getElementById('toDoContainer');
    todoItems.innerText = "";
    const toDoModel = document.createElement('div');
    toDoModel.id = 'toDoButtonContainer';
    todoItems.appendChild(toDoModel);
    const ADD_TODO_BUTTON = document.createElement('button');
    ADD_TODO_BUTTON.innerText = 'Add Item';
    ADD_TODO_BUTTON.id ='toDoAddButton';
    toDoModel.appendChild(ADD_TODO_BUTTON);
    ADD_TODO_BUTTON.addEventListener('click', () => {
        toDoModel.innerHTML =
        `<form id="itemAdder">
            <label for="Iname">Item Name:</label><br>
            <input type="text" id="Iname" name="Iname"><br>
            <label for="Idescription">Item Description:</label><br>
            <input type="text" id="Idescription" name="Idescription><br>
            <label for="Idate">Item Due Date:</label><br>
            <input type="date" id="Idate" name="Idate"><br>
            <button id="submit">Save</button><br>
            <button id="cancel">Cancel</button><br>
        </form>`
        const submit = document.getElementById('submit');
        submit.addEventListener('click', () => { 
            const itemName = document.getElementById('Iname').value;
            const itemDescription = document.getElementById('Idescription').value;
            const itemDate = document.getElementById('Idate').value;
            objectSave(itemName, itemDescription, itemDate);
        })
        const cancel = document.getElementById('cancel')
        cancel.addEventListener('click', ()=>{
            toDoModel.innerText = "";
            toDoModel.appendChild(ADD_TODO_BUTTON);
        })

        var form = document.getElementById("itemAdder");
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
    })
    const TODO_CONTAINER = document.createElement('div');
    TODO_CONTAINER.id = 'toDos';
    todoItems.appendChild(TODO_CONTAINER);
}



//Currently trying to get the name for the list to put it in
function objectSave(Name, Description, DueDate) {
    const itemObject = {theName: Name, theDescription: Description, theDueDate: DueDate};

    // const LIST_NAME = document.getElementByI

    if(localStorage.getItem('list') == null) {
        localStorage.setItem('list', '[]')
    }

    let old_list = JSON.parse(localStorage.getItem('list'));
    old_list.push(itemObject);

    localStorage.setItem('list', JSON.stringify(old_list));
}