let header = document.getElementById('header');
let sidebar = document.getElementById('side-bar');
let container = document.getElementById('container');
let showSideBar = false

function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        sidebar.classList.toggle("close")
    } else {
        sidebar.classList.toggle("close")
    }
}