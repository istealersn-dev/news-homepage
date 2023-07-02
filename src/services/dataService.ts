export async function fetchData(): Promise<any> {
    try {
        const response = await fetch('/data/homepage.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('There was a problem fetching data', error)
        throw (error)
    }
}

