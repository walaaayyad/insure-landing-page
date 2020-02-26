const hamburger = document.querySelector('.hamburgerIcon');
const hamburgerClose = document.querySelector('.close-hamburgerIcon');
const navList = document.querySelector('.navList');
const links = document.querySelectorAll('.navList li');

hamburger.addEventListener('click', ()=> {
    navList.classList.add('open');
    hamburger.classList.add('hidden');
    links.forEach(link=> {
        link.classList.add('fade')
    });
})

hamburgerClose.addEventListener('click', ()=> {
    navList.classList.remove('open');
    hamburger.classList.remove('hidden');
    links.forEach(link=> {
        link.classList.remove('fade')
    });
})