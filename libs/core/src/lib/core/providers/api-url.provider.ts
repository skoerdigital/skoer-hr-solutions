import { API_URL } from '@skoer-hr-solutions/shared/tokens';

export const provideApiUrl = (url: string) => ({
    provide: API_URL,
    useValue: url
});
