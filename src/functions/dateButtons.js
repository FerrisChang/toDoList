
//make the today default button functions
//will take the current date in the format of yyyy-MM-dd and compare the dates only showing todays todos


export function todayDefaultButton(){
    let currentDate = new Date().toJSON().slice(0, 10);

    const ITEM_CONTAINER = document.getElementById('toDos');
    ITEM_CONTAINER.innerText = "";

    for(let i = 0, len = localStorage.length; i < len; ++i){
        const allItems = JSON.parse(localStorage.getItem(localStorage.key(i)));

        allItems.forEach(card => {
            if(card.theDueDate == currentDate){
                const toDoCard = document.createElement('div');
                toDoCard.id = 'itemCard';
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