import { HeroData } from './../types/index';
import { Button } from './Button';
import { Div } from "./Div"

const Hero = ({banner, heading, description, CTA}: HeroData) => {

    // Create indiviudal HTML elements
    const section = document.createElement('section')
    const hero = document.createElement('div')
    hero.classList.add('hero')
    const heroImg = document.createElement('div')
    heroImg.classList.add('hero__banner')
    const image = document.createElement('img')
    const heroContent = document.createElement('div')
    heroContent.classList.add('hero__content')
    const heroHeading = document.createElement('h1')
    const heroDesc = document.createElement('p')
    const heroBtn = Button(CTA)
    
    // Function to switch image for desktop vs mobile
    const updateImage = () => {
        const { desktop, mobile } = banner
        const imageUrl = window.innerWidth > 768 ? desktop : mobile
        image.src = imageUrl
    }

    // argument assignment as per the argument definition
    heroHeading.innerHTML = heading ? heading : ''
    heroDesc.innerHTML = description ? description : ''

    // Start grouping them based on the desired layout
    const divElement = Div()
    divElement.classList.add('hero__content--desc')
    divElement.appendChild(heroDesc)
    divElement.appendChild(heroBtn)
    heroContent.appendChild(heroHeading)
    heroContent.appendChild(divElement)
    heroImg.appendChild(image)
    hero.appendChild(heroImg)
    hero.appendChild(heroContent)
    section.appendChild(hero)

    // Update image function callback for load and while resizing window
    window.addEventListener('load', updateImage)
    window.addEventListener('resize', updateImage)

    return section

}

export default Hero