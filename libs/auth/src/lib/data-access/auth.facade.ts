import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from './store/auth.actions';
import * as fromAuth from './store/auth.reducer';
import * as fromAuthSelectors from './store/auth.selectors';
import { LoginRequest } from './models';


@Injectable()
export class AuthFacade {
    private readonly store = inject(Store<fromAuth.AuthState>);
    readonly isAuthenticated$ = this.store.select(fromAuthSelectors.selectIsAuthenticated);
    readonly loginError$ = this.store.select(fromAuthSelectors.selectLoginError);

    login(request: LoginRequest): void {
        this.store.dispatch(AuthActions.login({ request }));
    }

    logout(): void {
        this.store.dispatch(AuthActions.logout());
    }
}

export const provideAuthFacade = () => ({
    provide: AuthFacade,
    useClass: AuthFacade,
});
