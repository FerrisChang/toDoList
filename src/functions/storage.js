import { forEach } from "lodash";

//saves the project list to localstorage only.
export function save() {
    let new_data = document.getElementById('Lname').value;
    if(localStorage.getItem('LISTS') == null) {
        localStorage.setItem('LISTS', '[]')
    }

    let old_data = JSON.parse(localStorage.getItem('LISTS'));
    old_data.push(new_data);

    localStorage.setItem('LISTS', JSON.stringify(old_data))
} 

//will convert the localstorage array parsing it to display on the page.
export function view() {
    if(localStorage.getItem != null){
        const storedLists = JSON.parse(localStorage.getItem('LISTS'));
        storedLists.forEach(item => {
            const LIST_CONTAINER = document.getElementById('projectList');
            const ListButton = document.createElement('button');
            ListButton.innerText = item;
            ListButton.id = 'lists'
            LIST_CONTAINER.appendChild(ListButton);
            ListButton.addEventListener('click', () => {
                appendToDoButton(item);
                objectView();
            })
        })
    }
}

function appendToDoButton(Lname) {
    const todoItems = document.getElementById('toDoContainer');
    todoItems.innerText = "";
    const title = document.createElement('div');
    title.innerText = Lname;
    title.id = 'title';
    todoItems.appendChild(title);
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
            objectSave();
            objectView();
            toDoModel.innerText = "";
            toDoModel.appendChild(ADD_TODO_BUTTON);
        })
        const cancel = document.getElementById('cancel')
        cancel.addEventListener('click', ()=>{
            toDoModel.innerText = "";
            toDoModel.appendChild(ADD_TODO_BUTTON);
        })
    })
    const TODO_CONTAINER = document.createElement('div');
    TODO_CONTAINER.id = 'toDos';
    todoItems.appendChild(TODO_CONTAINER);
}



//Currently trying to get the name for the list to put it in
function objectSave() {
    const itemName = document.getElementById('Iname').value;
    const itemDescription = document.getElementById('Idescription').value;
    const itemDate = document.getElementById('Idate').value;
    const listUsed = document.getElementById('title').innerText;

    const itemObject = {theName: itemName, theDescription: itemDescription, theDueDate: itemDate};

    if(localStorage.getItem(listUsed) == null) {
        localStorage.setItem(listUsed, '[]')
    }

    let old_list = JSON.parse(localStorage.getItem(listUsed));
    old_list.push(itemObject);

    localStorage.setItem(listUsed, JSON.stringify(old_list));
}


//will display the list item card
export function objectView(){
    const LIST_TITLE = document.getElementById('title').innerText;
    if(localStorage.getItem(LIST_TITLE) != null){
        const storedItems = JSON.parse(localStorage.getItem(LIST_TITLE));
        const ITEM_CONTAINER = document.getElementById('toDos');
        ITEM_CONTAINER.innerText = "";
        storedItems.forEach(item => {
                const toDoCard = document.createElement('div');
                toDoCard.id = 'itemCard';
                toDoCard.innerHTML = 'Name: ' + item.theName + ' Description: ' + item.theDescription + ' Due Date: ' + item.theDueDate;
                ITEM_CONTAINER.appendChild(toDoCard);
        });
    }
}