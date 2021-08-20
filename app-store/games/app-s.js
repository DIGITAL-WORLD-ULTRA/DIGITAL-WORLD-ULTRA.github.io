'use strict'
document.querySelector('.close').addEventListener('click',() => {
    document.querySelector('.pop-up').style.transform = 'translateY(-150%)'
});
window.addEventListener('load',() => {
    setTimeout(() => {
        document.querySelector('.pop-up').style.transform = 'translateY(0)'
    },2000);
    document.querySelector('.preloader').style.transform = 'translateY(-100%)'
});
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',() => {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.toggle').classList.toggle('close');
});