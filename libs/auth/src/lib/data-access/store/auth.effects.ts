import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { AuthActions } from './auth.actions';
import { of } from 'rxjs';
import { AuthorizationService, TokenStorageService } from '../services';

@Injectable()
export class AuthEffects {
    private readonly actions$ = inject(Actions);
    private readonly authService = inject(AuthorizationService);
    private readonly tokenStorageService = inject(TokenStorageService);

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ request }) =>
                this.authService.login(request).pipe(
                    map(response => AuthActions.loginSuccess({ response })),
                    catchError(error => of(AuthActions.loginFailure({ error })).pipe(tap(console.log))),
                    finalize(() => console.log('eefect'))
                )
            )
        )
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            mergeMap(() =>
                this.authService.logout().pipe(
                    map(() => AuthActions.logoutSuccess()),
                    catchError(error => of(AuthActions.logoutFailure({ error }))),
                )
            )
        )
    );

    storeToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ response: { accessToken, refreshToken } }) => {
                this.tokenStorageService.saveToken(accessToken);
                this.tokenStorageService.saveRefreshToken(refreshToken);
            })
        ),
    { dispatch: false }
);
}