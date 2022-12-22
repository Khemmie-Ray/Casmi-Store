let menuBtn = document.querySelector('.mobileMenu')
let menuLists = document.querySelector('.myNav')
let closeIcon = document.querySelector('.closeBtn')


menuBtn.addEventListener('click', () => {
    showNav();
})

closeIcon.addEventListener('click', () => {
    hideNav();
})

function showNav() {
    menuLists.style.width = "60%";
}

function hideNav() {
    menuLists.style.width = "0%";
}