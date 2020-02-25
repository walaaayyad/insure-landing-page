const hamburger = document.querySelector('.hamburgerIcon');
const hamburgerClose = document.querySelector('.close-hamburgerIcon');
const navList = document.querySelector('.navList');
const links = document.querySelectorAll('.navList li');

hamburger.addEventListener('click', ()=> {
    navList.classList.toggle('open');
    links.forEach(link=> {
        link.classList.toggle('fade')
    });
})