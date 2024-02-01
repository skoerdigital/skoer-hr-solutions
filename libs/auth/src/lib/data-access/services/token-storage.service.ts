import { Injectable, inject } from '@angular/core';
import { JWT_STORAGE_TOKEN } from '../../utils/tokens';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private readonly storage = inject(JWT_STORAGE_TOKEN);

    clearStorage(): void {
        this.storage.clear();
    }

    getToken(): string | null {
        return this.storage.getItem(TOKEN_KEY);
    }

    getRefreshToken(): string | null {
        return this.storage.getItem(REFRESHTOKEN_KEY);
    }

    saveToken(token: string): void {
        this.storage.removeItem(TOKEN_KEY);
        this.storage.setItem(TOKEN_KEY, token);
    }

    saveRefreshToken(token: string): void {
        this.storage.removeItem(REFRESHTOKEN_KEY);
        this.storage.setItem(REFRESHTOKEN_KEY, token);
    }
}