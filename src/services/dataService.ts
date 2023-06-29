const dataUrl = '/data/homepage.json'

export async function fetchData(): Promise<any> {
    try {
        const response = await fetch(dataUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('There was a problem fetching data', error)
        throw(error)
    }
}

