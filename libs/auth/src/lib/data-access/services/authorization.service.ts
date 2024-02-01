import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, asyncScheduler, observeOn, of } from 'rxjs';

import { LoginRequest, RefreshTokenRequest, TokenResponse } from '../models';
import { API_URL } from 'libs/shared/utils/src/lib/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly apiUrl = inject(API_URL);
  private readonly httpClient = inject(HttpClient);

  login(request: LoginRequest): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(`${this.apiUrl}/auth/login`, request);
  }

  logout(): Observable<void> {
    return of().pipe(observeOn(asyncScheduler));
  }

  refreshToken(request: RefreshTokenRequest): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>(`${this.apiUrl}/auth/login`, request);
  }
}
