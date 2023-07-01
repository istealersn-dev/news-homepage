export interface MenuItem {
    item: string;
    link: string;
}

export interface Banner {
    desktop: string
    mobile: string
}
export interface ListItem {
    image: string
    num: string
    title: string
    description: string
}

export interface HeaderData {
    logo: string
    menuIcon: string
    menuClose: string
    menuItems: MenuItem[]
}

export interface HeroData {
    banner: Banner
    heading: string
    description: string
    CTA: string
}

export interface NewSpace {
    heading: string
    newItems: NewsItem[]
}

export interface RelatedData {
    newsList: NewsList[]
}

export interface NewsList {
    image: string
    alt: string
    newsItem: NewsItem
}

export interface NewsItem {
    parent: string
    heading: string
    description: string
}