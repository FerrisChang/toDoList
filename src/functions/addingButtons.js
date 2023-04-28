import { objectSave, objectView } from '../functions/storage'


//the function makes a form
//adds the card to that list
//appends the new card to the local storage

export function appendToDoButton(Lname) {
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