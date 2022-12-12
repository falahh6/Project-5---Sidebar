let navbar = document.querySelector('.navbar');
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
})

let listItem = document.getElementsByClassName('list');
let parentElement = document.querySelector('ul');
var mq = window.matchMedia('(max-width: 736px)');
if (mq.matches) {
    let listt = document.querySelectorAll('.list');
    for (let li of listt) {
        li.addEventListener('click', () => {
            navbar.classList.remove('is-active');
            hamburger.classList.remove('is-active');
        })
    }
}