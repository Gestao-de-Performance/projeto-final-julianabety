
let botaoMenu = document.getElementById('botaoMenu')
let menu = document.getElementById('menuMobile')
let overlay= document.getElementById('overlayMenu')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.add('abrirMenu')
})

menuenu.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrirMenu')
})