import "../styles/homePage.css"

function homePage() {
    const content = document.getElementById('content');

    //containers for all content.
    const navigation = document.createElement('header');
    navigation.id = 'header';
    const body = document.createElement('div');
    body.id = 'body';
    const footer = document.createElement('footer');
    footer.id = 'footer';
    content.appendChild(navigation);
    content.appendChild(body);
    content.appendChild(footer);

    //content for the  header.
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "ToDo List";
    navigation.appendChild(mainTitle);

    //content for main body.
    const lists = document.createElement('div');
    lists.id = 'toDoLists';
    const toDos = document.createElement('div');
    toDos.id = 'toDoItems';
    body.appendChild(lists);
    body.appendChild(toDos);
    
    //will pull todo items that are due by date here rather than seeing the list that they are due in.
    const dates = document.createElement('div');
    dates.id = 'dueDates';
    const dateOne = document.createElement('button');
    dateOne.id = 'today';
    dateOne.textContent = 'Today';
    const dateTwo = document.createElement('button');
    dateTwo.id = 'thisWeek';
    dateTwo.textContent = 'This Week';
    const dateThree = document.createElement('button');
    dateThree.id = 'thisMonth';
    dateThree.textContent = 'This Month';
    dates.appendChild(dateOne);
    dates.appendChild(dateTwo);
    dates.appendChild(dateThree);
    lists.appendChild(dates);

    const projects = document.createElement('div');
    projects.id = 'projectContainer';
    const projectTitle = document.createElement('h2');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = "PROJECTS";
    const projectItems = document.createElement('div');
    projectItems.id = 'projectNames';
    const addBtn = document.createElement('button');
    addBtn.id = 'addProjects';
    addBtn.textContent = '+ Add Project';
    projects.appendChild(projectTitle);
    projects.appendChild(projectItems);
    projectItems.appendChild(addBtn);
    lists.appendChild(projects);

    //contains footer for the copyright items
    const para = document.createElement('p');
    para.id = 'copyrights';
    para.textContent = "copyright © 2023 FerrisChang"
    footer.appendChild(para)
}
export default homePage;