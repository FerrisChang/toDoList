import { save, view } from "./functions/storage";

const CLICK_ADD_PROJECT = document.getElementById('addProjects');
CLICK_ADD_PROJECT.addEventListener('click', () => {
    const addingProject = document.getElementById('projectNames');
    addingProject.innerHTML = 
    `<form id="projectModel">
        <label for="Lname">List Name:</label><br>
        <input type="text" id="Lname" name="Lname"><br>
        <button id="yesList">Save</button>
        <button id="noList">Cancel</button>
    </form>`
    const adding = document.getElementById('yesList');
    adding.addEventListener('click', () => { save() });
    const canceling = document.getElementById('noList');
    canceling.addEventListener('click', () => { return "" })
});

view();










