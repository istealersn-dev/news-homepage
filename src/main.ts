import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import './styles/styles.scss'

import Header from "./components/Header";

const appElement = document.querySelector<HTMLDivElement>('#app')

if (appElement) {
  const headerComponent = await Header()
  appElement.appendChild(headerComponent)
}

const header = document.querySelector<HTMLUListElement>('header')
header?.classList.add('container')