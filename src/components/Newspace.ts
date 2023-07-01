import { NewSpace, NewsItem } from "../types"
import { Div } from "./atoms/Div"
import { Headlines } from "./atoms/Headlines"

const Newspace = ({heading, newItems}: NewSpace) => {

    const sectionNewSpace = document.createElement('section')
    const newsSpace = Div()
    newsSpace.classList.add('newspace')

     const newsSpaceHeading = document.createElement('span')
     newsSpaceHeading.textContent = heading
     newsSpaceHeading.setAttribute("aria-role", "heading")
     newsSpaceHeading.classList.add('newspace__heading')

     const newsItems = Div()
     newsItems.classList.add('newspace__newsitems')

     newItems.forEach( (item: NewsItem) => {
        const { heading, description } = item;
        const items = Headlines({heading, description})
        newsItems.appendChild(items)
     })

     newsSpace.appendChild(newsSpaceHeading)
     newsSpace.appendChild(newsItems)
     sectionNewSpace.appendChild(newsSpace)

     return sectionNewSpace
}

export default Newspace