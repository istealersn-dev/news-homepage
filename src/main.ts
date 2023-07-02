import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import './styles/styles.scss'

import { fetchData } from "./services/dataService"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Newspace from "./components/Newspace"
import Related from "./components/Related"

const mainElement = document.createElement('main');
const appElement = document.querySelector<HTMLDivElement>('#app');


(async () => {
  try {
    const data = await fetchData()

    if (appElement) {

      // Header component
      const headerComponent = Header(data.header)

      const navOpen = headerComponent.querySelector('.header__nav--hamburger')
      const navClose = headerComponent.querySelector('.header__nav--items-close')
      const hamMenu = headerComponent.querySelector('.header__nav--items') as HTMLElement | null

      navOpen?.addEventListener('click', () => {
        if (hamMenu) hamMenu.style.display = 'flex'
        document.body.classList.toggle('freeze')
      })

      navClose?.addEventListener('click', () => {
        document.body.classList.toggle('freeze')
        if (hamMenu) hamMenu.style.display = 'none'
      })

      const renderMenu = () => {
        const ham = headerComponent.querySelector('.header__nav--items') as HTMLElement | null;
        const viewport = window.innerWidth;

        if (ham) {
          if (viewport < 992) {
            ham.style.display = 'none';
          } else {
            ham.style.display = 'flex';
          }
        }
      };

      headerComponent.classList.add('container')
      appElement.appendChild(headerComponent)

      // Hero Component
      const heroComponent = Hero(data.main.hero)
      mainElement.appendChild(heroComponent)

      //NewSpace component
      const newSpaceComponent = Newspace(data.main.newspace)
      mainElement.appendChild(newSpaceComponent)

      // Related component
      const relComponent = Related(data.main.related)
      mainElement.appendChild(relComponent)


      // Add the main Element
      mainElement.classList.add('container')
      appElement.appendChild(mainElement)

      window.addEventListener('load', renderMenu)
      window.addEventListener('resize', renderMenu)

    }
  } catch (error) {
    console.error('There was a problem fetching the data', error)
    throw (error)
  }
})();