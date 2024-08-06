// Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Up Button
let scrollUp = document.querySelector('.scroll-to-top');
window.addEventListener('scroll',()=>{
    scrollUp.classList.toggle('up',window.scrollY > 100);
});
function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}


// Heart fill
let heart = document.querySelectorAll('.bx-heart');
let imgGallery = document.querySelector('.img-gallery');
heart.forEach(hearts => {
    hearts.onclick = () => {
        hearts.classList.toggle('bxs-heart');
        navbar.classList.toggle('change');
    };
});

// Scroll revel
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    opacity: 0,
    reset: true,
})

sr.reveal('.home .text-content',{origin:'left',delay: 600,interval: 250})
sr.reveal('.home .img-content img',{origin:'right',delay: 600,interval: 250})

// Why Choose Us
sr.reveal('.whyChoose .col1',{origin:'bottom',delay: 600,interval: 250})

// About Us
sr.reveal('.aboutus .img-content img',{origin:'left',delay: 600,interval: 250})
sr.reveal('.aboutus .text-content',{origin:'right',delay: 600,interval: 250})

// Popular
sr.reveal('.popular h2',{origin:'bottom'})
sr.reveal('.popular .rows .cart',{origin:'left',delay:100,interval: 300})

// Footer
sr.reveal('.footer-logo',{origin:'bottom',delay:400})
sr.reveal('.footer-box',{origin:'bottom',delay:400,interval : 500})
sr.reveal('.social',{origin:'top',delay:400,interval : 500})

