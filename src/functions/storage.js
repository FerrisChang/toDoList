import { forEach, indexOf } from "lodash";
import { appendToDoButton, deleteButton } from "./addingButtons";

//saves the project list to local storage only.
export function save() {
    let new_data = document.getElementById('Lname').value;
    if(localStorage.getItem('LISTS') == null) {
        localStorage.setItem('LISTS', '[]')
    }
    let old_data = JSON.parse(localStorage.getItem('LISTS'));
    old_data.push(new_data);
    localStorage.setItem('LISTS', JSON.stringify(old_data))
} 

//will convert the local storage array parsing it to display on the page.
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

//Currently trying to get the name for the list to put it in
export function objectSave() {
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
            toDoCard.className = 'itemCard';
            toDoCard.id = item.theName;
            toDoCard.innerHTML = `
            <div id="${item.theName}">Name: ${item.theName}</div><br>
            <div id="cardDesc">Description: ${item.theDescription}</div><br>
            <div id="cardDate">Due Date: ${item.theDueDate}</div><br>
            `;
            ITEM_CONTAINER.appendChild(toDoCard);
            deleteButton(item, storedItems, item.theName);
        });
    }
}