import homePage from "./pages/homePage";
import clear from "./functions/clearSubPg";
import addListBtn from "./functions/addProject";
import subPage from "./pages/univSubPage";  



homePage();



const todayBtn = document.getElementById('today');
todayBtn.addEventListener('click', () => {
    clear();
    subPage('Today', false);
});

const weekBtn = document.getElementById('thisWeek');
weekBtn.addEventListener('click', () => {
    clear();
    subPage('This Week', false);
});

const monthBtn = document.getElementById('thisMonth');
monthBtn.addEventListener('click', () => {
    clear();
    subPage('This Month', false);
});

const addBtn = document.getElementById('addProjects');
addBtn.addEventListener('click', () => {
    addListBtn('sideBar');
});