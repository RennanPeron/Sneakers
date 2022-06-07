let header = document.getElementById('header');
let sidebar = document.getElementById('side-bar');
let container = document.getElementById('container');
let showSideBar = false

function toggleSideBar() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        sidebar.style.marginLeft = '0'
        container.classList.add('blur')
    } else {
        sidebar.style.marginLeft = '-100vw'
        container.classList.remove('blur')
    }
}