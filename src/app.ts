/*=========================
mobile header section start
============================*/

//getting elements from the Html document
const menu = document.querySelector('.menu') as HTMLElement
const menu_icon = document.querySelector('.menu-bar') as HTMLElement
const cross_icon = document.querySelector('.cross-bar') as HTMLElement
const all_links = document.querySelectorAll('.links') as NodeListOf<Element>
//add event on elements
menu_icon.addEventListener('click', () => {
    menu.classList.add('d-menu')
    cross_icon.classList.add('d-crossbar')
    menu_icon.classList.add('h-menu_icon')
})
cross_icon.addEventListener('click', (e) => {
    e.preventDefault()
    menu_icon.classList.remove('h-menu_icon')
    menu.classList.remove('d-menu')
    cross_icon.classList.remove('d-crossbar ')
})
all_links.forEach((elem) => elem.addEventListener('click', () => {
    menu_icon.classList.remove('h-menu_icon')
    menu.classList.remove('d-menu')
    menu_icon.addEventListener('click', (e) => e.preventDefault())
}))
