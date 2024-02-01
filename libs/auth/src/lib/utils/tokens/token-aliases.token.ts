import { InjectionToken } from "@angular/core";

export const JWT_STORAGE_ALIASES_TOKEN = new InjectionToken<Record<'tokenKey' | 'refreshTokenKey', string>>('JWT_STORAGE_ALIASES_TOKEN');
