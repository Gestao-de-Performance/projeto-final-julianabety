
let botaoMenu = document.getElementById('botaoMenu')
let menu = document.getElementById('menuMobile')
let overlay = document.getElementById('overlayMenu')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})