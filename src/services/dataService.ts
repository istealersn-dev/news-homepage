import { HeaderData } from "../types";

export async function fetchHeaderData(): Promise<HeaderData> {

    try {
        const response = await fetch('/data/homepage.json')
        const data = await response.json()
        return data.header;
    } catch (error) {
        console.error('There was a problem fetching data', error)
        return {} as HeaderData
    }
}