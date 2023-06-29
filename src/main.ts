import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import './styles/styles.scss'

import { fetchData } from "./services/dataService"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hamburger from "./components/Hamburger"
const mainElement = document.createElement('main');
const appElement = document.querySelector<HTMLDivElement>('#app');

(async() => {
  try {
    const data = await fetchData()

    if (appElement) {
  
      // Header component
      const hamburgerComponent = Hamburger(data.header)
      const headerComponent = Header(data.header)

      const mobileMenu = headerComponent.querySelector(".header__nav");

      if (mobileMenu) {
          mobileMenu.appendChild(hamburgerComponent);
      }

      headerComponent.classList.add('container')
      appElement.appendChild(headerComponent)

      // Hero Component
      const heroComponent = Hero(data.main.hero)
      heroComponent.classList.add('container')
      mainElement.appendChild(heroComponent)
      appElement.appendChild(mainElement)

    }
  } catch(error) {
    console.error('There was a problem fetching the data', error)
    throw(error)
  }
})();