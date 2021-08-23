/*

    ANALOG CLOCK
    ______________________________________________________________________

*/

var clock = () => {
    const a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s =a.getSeconds();
    let ss = document.querySelector('.hand.hand-sec');
    let mm = document.querySelector('.hand.hand-min');
    let hh = document.querySelector('.hand.hand-hour');
    ss.style.transform = 'rotate('+s*6+'deg)';
    mm.style.transform = 'rotate('+m*6+'deg)';
    hh.style.transform = 'rotate('+h*30+'deg)';
    setTimeout(clock ,1000)
}
clock()