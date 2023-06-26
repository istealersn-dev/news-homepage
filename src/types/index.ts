export interface MenuItem {
    item: string;
    link: string;
}

export interface HeaderData {
    logo: string
    menuIcon: string
    menuClose: string
    menuItems: MenuItem[]
}