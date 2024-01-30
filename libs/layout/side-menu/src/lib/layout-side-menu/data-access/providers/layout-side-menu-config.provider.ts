import { InjectionToken, Provider } from "@angular/core";
import { LayoutSideMenuConfig } from "../models";

const DEFAULT_SIDE_MENU_CONFIG = {
    items: [],
} satisfies LayoutSideMenuConfig;

export const SIDE_MENU_TOKEN = new InjectionToken<LayoutSideMenuConfig>('SIDE_MENU_TOKEN', {
    providedIn: 'root',
    factory: () => DEFAULT_SIDE_MENU_CONFIG,
});

export const provideSideMenu = (config: LayoutSideMenuConfig): Provider => ({
    provide: SIDE_MENU_TOKEN,
    useValue: config,
});
