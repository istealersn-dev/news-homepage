import { NewsList } from "../types";
import { Div } from "./atoms/Div";
import { Headlines } from "./atoms/Headlines";

let counter: number = 1

export const Newscard = ({image, alt, newsItem}: NewsList ) => {

    // Create NewsCard HTML DOM structure
    const card = Div()
    card.classList.add('newscard')

    const imgParent = Div()
    imgParent.classList.add('newscard__img')

    const img = document.createElement('img')
    img.src = image
    img.alt = alt

    imgParent.appendChild(img)

    const cardContent = Div()
    cardContent.classList.add('newscard__content')
    const cardHeading = document.createElement('h2')
    cardHeading.textContent = `${counter.toString().padStart(2, '0')}`
    counter++

    cardHeading.classList.add('newscard__content--heading')
    cardContent.appendChild(cardHeading)

    const {heading, description} = newsItem
    const parent = 'Newscard'

    const item = Headlines({parent, heading, description})
    cardContent.appendChild(item)

    card.appendChild(imgParent)
    card.appendChild(cardContent)

    return card
}