// import Hamburger from "./Hamburger";

import { HeaderData } from "../types";

const Header = ({logo, menuIcon}: HeaderData)  => {
    const header = document.createElement("header");
    header.classList.add("header");

    const navItems = document.createElement("nav");
    navItems.classList.add("header__nav");

    const navLogo = document.createElement("img");
    navLogo.classList.add("header__nav--logo");

    const mobileMenu = document.createElement("div");
    mobileMenu.classList.add("header__nav--mobile");

    const menuBar = document.createElement("img");
    menuBar.classList.add("header__nav--mobile-menu");

    mobileMenu.appendChild(menuBar);

    navLogo.src = logo ? logo : ''
    menuBar.src = menuIcon ? menuIcon : ''

    navItems.appendChild(navLogo);
    navItems.appendChild(mobileMenu);
    header.appendChild(navItems);

    return header;
};

export default Header;
