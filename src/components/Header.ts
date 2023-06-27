import { fetchHeaderData } from "../services/dataService";

import Hamburger from "./Hamburger";

const Header = async (): Promise<HTMLElement> => {

    const header = document.createElement('header')
    header.classList.add('header')

    const navItems = document.createElement('nav')
    navItems.classList.add('header__nav')

    const navLogo = document.createElement('img')
    navLogo.classList.add('header__nav--logo')


    const mobileMenu = document.createElement('div')
    mobileMenu.classList.add('header__nav--mobile')

    const menuBar = document.createElement('img')
    menuBar.classList.add('header__nav--mobile-menu')

    mobileMenu.appendChild(menuBar)

    try {
        const { logo, menuIcon } = await fetchHeaderData()

        navLogo.src = logo
        menuBar.src = menuIcon


    } catch (error) {
        console.error('There was a problem rendering Header elements', error)
    }

    navItems.appendChild(navLogo)
    navItems.appendChild(mobileMenu)
    header.appendChild(navItems)

    const hamburgerComponent = header.querySelector('.header__nav')

    if (hamburgerComponent) {
        const hamburger = await Hamburger()
        navItems.appendChild(hamburger)
    }

    return header
}

export default Header