import cancelFunction from "./cancelBtn";


export default function addItem(){
    const item = new ToDoItems();

    item.setTitle = document.getElementById('item-name').value;
    item.setDescription = document.getElementById('description').value;
    item.setDueDate = document.getElementById('due').value;
    item.setPriority = document.getElementById('number').value;

    const itemLocation = document.getElementById('childContainer');
    const itemDiv = document.createElement('div');
    itemDiv.id = 'button-task';
    const itemName = document.createElement('h3');
    itemName.textContent = item.getTitle;
    itemName.id = 'name';
    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.getDescription;
    itemLocation.appendChild(itemDiv);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDesc);


    cancelFunction('child');

}





    // parsedItems.forEach(index => {
    //     const itemLocation = document.getElementById('childContainer');
    //     const itemDiv = document.createElement('div');
    //     itemDiv.id = 'button-task';
    //     const itemName = document.createElement('h3');
    //     itemName.textContent = todoList.title;
    //     itemName.id = 'name';
    //     const itemDesc = document.createElement('p');
    //     itemDesc.textContent = todoList.description;
    //     itemLocation.appendChild(itemDiv);
    //     itemDiv.appendChild(itemName);
    //     itemDiv.appendChild(itemDesc);
    //     console.log('its working')
    // });






