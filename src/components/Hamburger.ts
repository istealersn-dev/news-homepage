import { HeaderData } from "../types";

const Hamburger = ({menuClose, menuItems }: HeaderData) => {

    const viewport = window.innerWidth

    if (viewport < 768) {

        const hamburger = document.createElement('div');
        hamburger.classList.add('hamburger');
        hamburger.setAttribute('aria-disabled', 'true')

        const hamburgerMenu = document.createElement('div');
        hamburgerMenu.classList.add('hamburger__menu');

        const close = document.createElement('img');
        close.classList.add('hamburger__menu--close')

        const ulItems = document.createElement('ul');
        ulItems.classList.add('hamburger__menu--items');
        
            close.src = menuClose ? menuClose : ''
            hamburgerMenu.appendChild(close)

            if (menuItems) {
                menuItems.forEach( menuItem => {
                const listItem = document.createElement('li')
                const listLink = document.createElement('a')

                listLink.href = menuItem.link
                listLink.textContent = menuItem.item

                listItem.appendChild(listLink)
                ulItems.appendChild(listItem)
            })} else ''

        hamburgerMenu.appendChild(ulItems)
        hamburger.appendChild(hamburgerMenu)

        return hamburger
    } else {
        const hamburgerParent = document.querySelector(".header__nav")
        const hamburger = document.querySelector(".hamburger") 
        if (hamburger) hamburgerParent?.removeChild(hamburger)
        return document.createElement("div")
    }
}

export default Hamburger