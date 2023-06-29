
export const Button = (text: string) => {

    const heroBtn = document.createElement('a')
    heroBtn.classList.add('primaryBtn')
    heroBtn.text = text

    return heroBtn
}