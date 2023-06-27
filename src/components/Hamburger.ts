import { fetchHeaderData } from "../services/dataService";

const Hamburger = async (): Promise<HTMLElement> => {

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');

    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.classList.add('hamburger__menu');

    const close = document.createElement('img');
    close.classList.add('hamburger__menu--close')

    const menuItems = document.createElement('ul');
    menuItems.classList.add('hamburger__menu--items');
    
    try {
        const { menuClose, menuItems: data } = await fetchHeaderData();

        close.src = menuClose
        hamburgerMenu.appendChild(close)

        data.forEach( menuItem => {
            const listItem = document.createElement('li')
            const listLink = document.createElement('a')

            listLink.href = menuItem.link
            listLink.textContent = menuItem.item

            listItem.appendChild(listLink)
            menuItems.appendChild(listItem)
        })
    } catch (error) {
        console.error('There was a problem rendering Hamburger', error)
    }

    hamburgerMenu.appendChild(menuItems)
    hamburger.appendChild(hamburgerMenu)

    return hamburger
}

export default Hamburger