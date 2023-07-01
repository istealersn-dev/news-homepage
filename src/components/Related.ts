import { RelatedData } from "../types"
import { Newscard } from "./Newscard"
import { Div } from "./atoms/Div"

const Related = ({newsList}: RelatedData) => {

    const section = document.createElement('section')
    const relParent = Div()
    relParent.classList.add('related')

    // Create Newscard for each entry
    newsList.forEach(item => {
        const card = Newscard(item)
        relParent.appendChild(card)
    })

    section.appendChild(relParent)
    return section
}

export default Related