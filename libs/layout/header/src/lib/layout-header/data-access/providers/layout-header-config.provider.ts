import { InjectionToken, Provider } from "@angular/core";
import { LayoutHeaderConfig } from "../models";

const DEFAULT_HEADER_CONFIG = {
    appName: 'Skoer HR Solutions',
} satisfies LayoutHeaderConfig;

export const HEADER_TOKEN = new InjectionToken<LayoutHeaderConfig>('HEADER_TOKEN', {
    providedIn: 'root',
    factory: () => DEFAULT_HEADER_CONFIG,
});

export const provideHeader = (config: LayoutHeaderConfig): Provider => ({
    provide: HEADER_TOKEN,
    useValue: config,
});
