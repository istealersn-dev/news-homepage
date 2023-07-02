import { NewSpace, NewsItem } from "../types"
import { Div } from "./atoms/Div"
import { Headlines } from "./atoms/Headlines"

const Newspace = ({ heading, newItems }: NewSpace) => {

   const aside = document.createElement('aside')
   const newsSpace = Div()
   newsSpace.classList.add('newspace')

   const newsSpaceHeading = document.createElement('span')
   newsSpaceHeading.textContent = heading
   newsSpaceHeading.setAttribute("aria-level", "2")
   newsSpaceHeading.classList.add('newspace__heading')

   const newsItems = Div()
   newsItems.classList.add('newspace__newsitems')

   newItems.forEach((item: NewsItem) => {
      const { heading, description } = item;
      const parent = 'Newspace'
      const items = Headlines({ parent, heading, description })
      newsItems.appendChild(items)
   })

   newsSpace.appendChild(newsSpaceHeading)
   newsSpace.appendChild(newsItems)
   aside.appendChild(newsSpace)

   return aside
}

export default Newspace