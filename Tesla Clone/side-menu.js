const openSideMenu = () => {
    document.querySelector('.background-blur').className = 'background-blur active';
    document.querySelector('aside').className = 'active';
}

const closeSideMenu = () => {
    document.querySelector('.background-blur').className = 'background-blur';
    document.querySelector('aside').className = '';
}



document.getElementById('menu-btn').onclick = e => {
    e.preventDefault();
    openSideMenu();
}

document.querySelector('.close-btn').onclick = e => {
    closeSideMenu();
}

document.querySelector('.background-blur') = e => {
    closeSideMenu();
}