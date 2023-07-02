import { HeaderData } from "../types";
import { Div } from "./atoms/Div";

const Header = ({ logo, menuIcon, menuClose, menuItems }: HeaderData) => {

    const header = document.createElement("header");
    header.classList.add("header");

    const nav = document.createElement("nav");
    nav.classList.add("header__nav");

    const navLogo = document.createElement("img");
    navLogo.classList.add("header__nav--logo");

    const navItems = Div()
    navItems.classList.add('header__nav--items')
    const navList = document.createElement('ul')
    if (menuItems) {
        menuItems.forEach(menuItem => {
            const listItem = document.createElement('li')
            const listLink = document.createElement('a')

            listLink.href = menuItem.link
            listLink.textContent = menuItem.item

            listItem.appendChild(listLink)
            navList.appendChild(listItem)
        })
    }

    const hamburger = document.createElement('img')
    hamburger.classList.add('header__nav--hamburger')

    const hamburgerClose = document.createElement('img')
    hamburgerClose.classList.add('header__nav--items-close')
    hamburgerClose.src = menuClose
    hamburgerClose.alt = "Hamburger menu close icon"

    navLogo.src = logo
    navLogo.alt = "Company logo"
    hamburger.src = menuIcon
    hamburger.alt = "Hamburger menu icon"

    navItems.appendChild(hamburgerClose)
    navItems.appendChild(navList)

    nav.appendChild(navLogo);
    nav.appendChild(hamburger)
    nav.appendChild(navItems);
    header.appendChild(nav);

    return header;
};

export default Header;
