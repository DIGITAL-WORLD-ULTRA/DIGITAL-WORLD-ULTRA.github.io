document.querySelector('.toggle').addEventListener('click',() => {
    document.querySelector('.toggle').classList.toggle('cross')
});
window.addEventListener('load',() => {
    document.querySelector('.preloader').style.transform = 'translateY(-100vh)';
})

function hidecode(){
    document.querySelector('.editor').classList.remove('opened-code')
}
function opencode(){
    document.querySelector('.editor').classList.add('opened-code')
}