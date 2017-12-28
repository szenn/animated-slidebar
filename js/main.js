const menuButton = document.getElementById('menubutton');
const sideBar = document.getElementById('sidebar');
const topLine = document.getElementById('top');
const middleLine = document.getElementById('middle');
const bottomLine = document.getElementById('bottom');


menuButton.addEventListener('click', function(){
    sideBar.classList.toggle('active');
    menuButton.classList.toggle('active');
    
    topLine.classList.toggle('active');
    middleLine.classList.toggle('active');
    bottomLine.classList.toggle('active');


});
