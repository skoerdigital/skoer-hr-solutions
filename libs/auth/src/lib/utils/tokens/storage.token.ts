import { InjectionToken } from '@angular/core';

export const JWT_STORAGE_TOKEN = new InjectionToken<Storage>('JWT_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: () => localStorage,
});
