import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import './styles/styles.scss'

import { fetchData } from "./services/dataService"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hamburger from "./components/Hamburger"
import Newspace from "./components/Newspace"
import Related from "./components/Related"

const mainElement = document.createElement('main');
const appElement = document.querySelector<HTMLDivElement>('#app');


// Adds container class to components
const addContainer = (component: HTMLElement): HTMLElement => {
  component.classList.add('container')
  return component
}

(async() => {
  try {
    const data = await fetchData()

    if (appElement) {
  
      // Header component
      const hamburgerComponent = Hamburger(data.header)
      const headerComponent = Header(data.header)
      const mobileMenu = headerComponent.querySelector(".header__nav");
      const navOpen = headerComponent.querySelector(".header__nav--mobile-menu")
      const navClose = hamburgerComponent.querySelector(".hamburger__menu--close")
      if (mobileMenu) {
          mobileMenu.appendChild(hamburgerComponent);
      }

      navOpen?.addEventListener('click', () => {
        console.log('Clicked')
        hamburgerComponent.classList.toggle('active')
        hamburgerComponent.removeAttribute('aria-disabled')
      })

      navClose?.addEventListener('click', ()=> {
        hamburgerComponent.classList.toggle('active')
        hamburgerComponent.setAttribute('aria-disabled', "true")
      })

      appElement.appendChild(
        addContainer(headerComponent)
      )

      // Hero Component
      const heroComponent = Hero(data.main.hero)
      mainElement.appendChild(
        addContainer(heroComponent)
      )

      //NewSpace component
      const newSpaceComponent = Newspace(data.main.newspace)
      mainElement.appendChild(
        addContainer(newSpaceComponent)
      )

      // Related component
      const relComponent = Related(data.main.related)
      mainElement.appendChild(
        addContainer(relComponent)
      )

      // Add the main Element
      appElement.appendChild(mainElement)

    }
  } catch(error) {
    console.error('There was a problem fetching the data', error)
    throw(error)
  }
})();