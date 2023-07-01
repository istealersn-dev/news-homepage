export const Div = (child?: HTMLElement | string): HTMLDivElement => {
    const div = document.createElement('div')

    if (child) {
        if (typeof child === 'string') {
            div.textContent = child
        } else {
            div.appendChild(child)
        }
    }

    return div
}