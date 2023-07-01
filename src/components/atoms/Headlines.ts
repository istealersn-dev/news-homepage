import { NewsItem } from "../../types"
import { Div } from "./Div"


export const Headlines = ({parent, heading, description}: NewsItem) => {

    // Create HTML elements
    const newsItem = Div()

    let newsHeading: HTMLHeadingElement
    const newsDesc = document.createElement('p')
    newsDesc.classList.add('desc')

     if (parent === 'Newscard') {
        newsItem.classList.add('news-item-rel')
        newsHeading = document.createElement('h3') as HTMLHeadingElement
        newsDesc.classList.add('gunmetal')
     } else {
        newsItem.classList.add('news-item')
        newsHeading = document.createElement('h2') as HTMLHeadingElement
        newsDesc.classList.add('silver')
     }

    // Map the fetched data
    newsHeading.textContent = heading
    newsDesc.textContent = description

    newsItem.appendChild(newsHeading)
    newsItem.appendChild(newsDesc)

    return newsItem
}