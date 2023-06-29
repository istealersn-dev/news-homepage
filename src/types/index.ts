export interface MenuItem {
    item: string;
    link: string;
}

export interface Banner {
    desktop: string
    mobile: string
}

interface NewItem {
    heading: string
    description: string
}

export interface ListItem {
    image: string
    num: string
    title: string
    description: string
}

export interface HeaderData {
    logo?: string
    menuIcon?: string
    menuClose?: string
    menuItems?: MenuItem[]
}

export interface HeroData {
    banner: Banner
    heading: string
    description: string
    CTA: string
}

export interface NewSpace {
    newItems: NewItem[]
}

export interface NewsList {
    newsList: ListItem[]
}