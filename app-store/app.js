'use strict'
console.log('WELCOME BUDDY!!');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',() => {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.toggle').classList.toggle('close');
});
window.addEventListener('load',() => {
    document.querySelector('.preloader').style.transform = 'translateY(-100vh)'
    setTimeout(() => {
        document.querySelector('.pop-up').style.transform = 'translateY(0)'
    },2000);
});
document.querySelector('.close').addEventListener('click',() => {
    document.querySelector('.pop-up').style.transform = 'translateY(-150%)'
});
document.querySelector('#app-search').addEventListener('keyup',() => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("app-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("main");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("c")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        
    }
    
    
});



document.querySelector('#app').addEventListener("click", () => {
    var   ul, li, a, i, txtValue;
    ul = document.getElementById("main");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("c")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf('APP') > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});

document.querySelector('#all').addEventListener("click", () => {
    var   ul, li, a, i, txtValue;
    ul = document.getElementById("main");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("c")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf('ALL') > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});

document.querySelector('#game').addEventListener("click", () => {
    var   ul, li, a, i, txtValue;
    ul = document.getElementById("main");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("c")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf('GAME') > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
document.querySelector('#documents').addEventListener("click", () => {
    var   ul, li, a, i, txtValue;
    ul = document.getElementById("main");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("c")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf('DOCUMENT') > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});