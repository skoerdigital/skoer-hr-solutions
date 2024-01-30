interface MenuItem {
    svgIcon: string;
    label: string; 
    route: string;
}

export interface LayoutSideMenuConfig {
    items: MenuItem[];
    appLabel: string;
}
