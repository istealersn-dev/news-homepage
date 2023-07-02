// import Hamburger from "./Hamburger";

import { HeaderData } from "../types";
import { Div } from "./atoms/Div";

const Header = ({logo, menuIcon, menuClose, menuItems}: HeaderData)  => {
    const header = document.createElement("header");
    header.classList.add("header");

    const navItems = document.createElement("nav");
    navItems.classList.add("header__nav");

    const navLogo = document.createElement("img");
    navLogo.classList.add("header__nav--logo");

    let desktopMenuRendered = false;
    let moblieMenuRendered = false;

    const renderMenu = () => {

        const viewport = window.innerWidth

        if (viewport > 768) {

            // remove existing mobile menu if it exists
            const mobileMenu = navItems.querySelector(".header__nav--mobile")
            if (mobileMenu) navItems.removeChild(mobileMenu)

            if (!desktopMenuRendered) {
            const desktopMenu = Div();
            const navList = document.createElement('ul')
        
            if (menuItems) {
                menuItems.forEach(menuItem => {
                    const listItem = document.createElement('li')
                    const listLink = document.createElement('a')
        
                    listLink.href = menuItem.link
                    listItem.textContent = menuItem.item
        
                    listItem.appendChild(listLink)
                    navList.appendChild(listItem)
                })
            }
        
            desktopMenu.appendChild(navList)
            desktopMenu.classList.add('header__nav--desktop')
            navItems.appendChild(desktopMenu)
        }

            desktopMenuRendered = true
            moblieMenuRendered = false

        } else {

            // remove existing desktop menu if it exists
            const desktopMenu = navItems.querySelector(".header__nav--desktop")
            if (desktopMenu) navItems.removeChild(desktopMenu)

            if (!moblieMenuRendered) {
                const mobileMenu = document.createElement("div");
                mobileMenu.classList.add("header__nav--mobile");
                mobileMenu.setAttribute('aria-controls', "hamburger-menu")
                mobileMenu.setAttribute('aria-label', "Toggle menu")
            
                const menuBar = document.createElement("img");
                menuBar.classList.add("header__nav--mobile-menu");
                menuBar.src = menuIcon
        
            mobileMenu.appendChild(menuBar);
            navItems.appendChild(mobileMenu);
            }

            desktopMenuRendered = false
            moblieMenuRendered = true
        }
    }

    navLogo.src = logo
    navItems.appendChild(navLogo);
    header.appendChild(navItems);

    // Update image function callback for load and while resizing window
    window.addEventListener('load', renderMenu)
    window.addEventListener('resize', renderMenu)

    return header;
};

export default Header;
