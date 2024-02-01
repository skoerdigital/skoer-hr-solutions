import { API_URL } from 'libs/shared/utils/src/lib/tokens';

export const provideApiUrl = (url: string) => ({
    provide: API_URL,
    useValue: url
});
