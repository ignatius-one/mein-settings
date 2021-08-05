
const btn = document.querySelector('#btn-on')
const menu = document.querySelector('.open')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')

      if (menu.classList.contains('active')) {
        btn.setAttribute('aria-label','close-menu')
    } else {
        btn.setAttribute('aria-label','open-menu')
    }
})
$(function () {
    let header = document.getElementById('container-menu');
    let headroom = new Headroom(header);
    headroom.init();   
})


document.getElementById('date').innerHTML = new Date().getFullYear()


// top 
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.btn-top-container')
            .classList.add('show-top')
    } else {
          document.querySelector('.btn-top-container')
            .classList.remove('show-top')
    }
}
document.querySelector('.btn-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    })
})