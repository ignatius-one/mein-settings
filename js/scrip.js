
const menu = document.getElementById('btn-open-menu')
menu.addEventListener('click',()=> {
    document.getElementById('container-menu').classList.toggle('active')
})

$(function () {
    let header = document.getElementById('container-menu');
    let headroom = new Headroom(header);
    headroom.init();   
})

document.getElementById('date').innerHTML = new Date().getFullYear()