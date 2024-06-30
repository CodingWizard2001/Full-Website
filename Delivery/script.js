// Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
}