const navSlide = () => {
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.menu-items');
    const navLinks = document.querySelectorAll('.menu-items li');
    
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link, index) =>{
        link.style.animation= `menuItemsFade 0.5s ease forwards ${index/7 + 0.5}s`;

    }); 
}
navSlide();