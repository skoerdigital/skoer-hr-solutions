import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { toObservable } from '@angular/core/rxjs-interop';

import { Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';

import { AuthorizationService, TokenStorageService } from '../services';
import { AuthorizationInterceptorProviderConfig, TokenResponse } from '../models';
import { JWT_STORAGE_ALIASES_TOKEN, JWT_STORAGE_TOKEN } from '../../utils/tokens';


const TOKEN_HEADER_KEY = 'x-access-token';
const SIGN_IN_URL = 'auth/signin';

@Injectable()
export class AuthInterceptor<T extends object> implements HttpInterceptor {
    private readonly authService = inject(AuthorizationService);
    private readonly tokenService = inject(TokenStorageService);
    private readonly refreshToken = signal<string | null>(null);
    private isRefreshing = false;

    intercept(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        let currentRequest = request;
        const token = this.tokenService.getToken();

        if (token != null) {
            currentRequest = this.addTokenHeader(request, token);
        }

        currentRequest = currentRequest.clone({
            headers: currentRequest.headers.set('Content-Type', 'application/json'),
        });

        return next.handle(currentRequest).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && !currentRequest.url.includes(SIGN_IN_URL) && error.status === 401) {
                    return this.handle401Error(currentRequest, next);
                }

                return throwError(error);
            })
        );
    }

    private addTokenHeader(request: HttpRequest<T>, token: string): HttpRequest<T> {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
    }

    private handle401Error(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshToken.set(null);

            const refreshToken = this.tokenService.getRefreshToken();

            if (refreshToken) {
                return this.authService.refreshToken({ refreshToken }).pipe(
                    switchMap((tokenResponse: TokenResponse) => {
                        const { accessToken, refreshToken } = tokenResponse;

                        this.tokenService.saveToken(accessToken);
                        this.refreshToken.set(accessToken);

                        return next.handle(this.addTokenHeader(request, refreshToken));
                    }),
                    catchError((err) => {
                        this.tokenService.clearStorage();
                        return throwError(err);
                    }),
                    finalize(() => { this.isRefreshing = false; })
                );
            }     
        }
        
        return toObservable(this.refreshToken).pipe(
            filter(token => token !== null),
            take(1),
            switchMap((token) => next.handle(this.addTokenHeader(request, token as string)))
        );
    }
}

export const provideAuthInterceptor = ({ aliases, storage }: AuthorizationInterceptorProviderConfig) => [
    { provide: JWT_STORAGE_TOKEN, useValue: storage },
    { provide: JWT_STORAGE_ALIASES_TOKEN, useValue: aliases },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
