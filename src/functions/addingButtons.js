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
    ADD_TODO_BUTTON.innerHTML = 'Add To Do';
    ADD_TODO_BUTTON.id ='toDoAddButton';
    toDoModel.appendChild(ADD_TODO_BUTTON);
    ADD_TODO_BUTTON.addEventListener('click', () => {
        toDoModel.innerHTML =
        `<form id="itemAdder">
            <label for="Iname">Item Name:</label>
            <input type="text" id="Iname" name="Iname">
            <label for="Idescription">Item Description:</label>
            <input type="text" id="Idescription" name="Idescription>
            <label for="Idate">Item Due Date:</label>
            <input type="date" id="Idate" name="Idate">
            <button id="submit">Save</button>
            <button id="cancel">Cancel</button>
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



//make the today default button functions
//will take the current date in the format of yyyy-MM-dd and compare the dates only showing todays todos.
export function todayDefaultButton(){
    let currentDate = new Date().toJSON().slice(0, 10);
    const ITEM_CONTAINER = document.getElementById('toDos');
    ITEM_CONTAINER.innerText = "";
    for(let i = 0, len = localStorage.length; i < len; ++i){
        const allItems = JSON.parse(localStorage.getItem(localStorage.key(i)));
        allItems.forEach(card => {
            if(card.theDueDate == currentDate){
                const toDoCard = document.createElement('div');
                toDoCard.id = card.theName;
                toDoCard.className = 'itemCard';
                toDoCard.innerHTML = `
                <div id="cardName">Name: ${card.theName}</div><br>
                <div id="cardDesc">Description: ${card.theDescription}</div><br>
                <div id="cardDate">Due Date: ${card.theDueDate}</div><br>
                `
                ITEM_CONTAINER.appendChild(toDoCard);
            }
        })
    }
}

//deletion button will be added to cards
// will give function to delete button to remove from DOM and local storage.
export function deleteButton(objectSent, parsedLocalStorage, nameOfCard){
    const LIST_TITLE = document.getElementById('title').innerText;
    const ITEM_CONTAINER = document.getElementById('toDos');
    const toDoCard = document.getElementById(nameOfCard);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-btn');
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', (event) => {
        if(event.target.id === 'delete-btn'){
            ITEM_CONTAINER.removeChild(toDoCard)
            const indexNumber = parsedLocalStorage.indexOf(objectSent);
            parsedLocalStorage.splice(indexNumber, 1);
            localStorage.setItem(LIST_TITLE, JSON.stringify(parsedLocalStorage));
        }
    });
    toDoCard.appendChild(deleteButton);
}

//delete button for the lists
export function listDeleteButton(arrayOfLists,listName) {

    const LIST_LOCATION = document.getElementById('projectList');
    const SPECIFIC_LIST = document.getElementById(listName);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'list-delete-btn');
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', (event) => {
        if(event.target.id === 'list-delete-btn'){
            LIST_LOCATION.removeChild(SPECIFIC_LIST)
            const indexNumber = arrayOfLists.indexOf(listName);
            arrayOfLists.splice(indexNumber, 1);
            localStorage.setItem('LISTS' , JSON.stringify(arrayOfLists));
            localStorage.removeItem(listName)
            window.location.reload();
        }
    
    });
    SPECIFIC_LIST.appendChild(deleteButton);
} 