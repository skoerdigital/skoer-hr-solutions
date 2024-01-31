import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    isAuthenticated: false,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, () => ({ isAuthenticated: false })),
    on(AuthActions.loginSuccess, () => ({ isAuthenticated: true })),
    on(AuthActions.loginFailure, () => ({ isAuthenticated: false })),
    on(AuthActions.logout, () => ({ isAuthenticated: false })),
    on(AuthActions.logoutSuccess, () => ({ isAuthenticated: true })),
    on(AuthActions.logoutFailure, () => ({ isAuthenticated: false })),
);
