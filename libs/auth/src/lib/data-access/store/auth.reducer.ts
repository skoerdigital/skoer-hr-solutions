import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { HttpErrorResponse } from '@angular/common/http';

export const authFeatureKey = 'feature-auth';

export interface AuthState {
    isAuthenticated: boolean;
    error: HttpErrorResponse | null;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => { console.log(state); return ({ ...state, error: null }); }),
    on(AuthActions.loginSuccess, (state) => { console.log(state); return ({ ...state, isAuthenticated: true, error: null }); }),
    on(AuthActions.loginFailure, (state, { error }) => { console.log(state); return ({ ...state, isAuthenticated: false, error }); }),
    on(AuthActions.logout, (state) => ({ ...state })),
    on(AuthActions.logoutSuccess, (state) => ({ ...state, isAuthenticated: false })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
);

export const authFeature = createFeature({
    name: authFeatureKey,
    reducer: authReducer,
});