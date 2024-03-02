/*=========================
mobile header section start
============================*/

//getting elements from the Html document
const menu = document.querySelector('.menu') as HTMLElement
const menu_icon = document.querySelector('.menu-bar') as HTMLElement
const cross_icon = document.querySelector('.cross-bar') as HTMLElement

//add event on element
menu_icon.addEventListener('click', () => {
    menu.classList.add('d-menu')
    cross_icon.classList.add('d-crossbar')
})
cross_icon.addEventListener('click', () => {
    menu.classList.remove('d-menu')
    cross_icon.classList.remove('d-crossbar ')
})