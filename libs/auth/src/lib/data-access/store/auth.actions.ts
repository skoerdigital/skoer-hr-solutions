import { createAction, props } from '@ngrx/store';
import { LoginRequest, TokenResponse } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logout',
    LOGOUT_SUCCESS = '[Auth] Logout Success',
    LOGOUT_FAILURE = '[Auth] Logout Failure'
}

export const login = createAction(
    AuthActionTypes.LOGIN,
    props<{ request: LoginRequest }>()
);

export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ response: TokenResponse }>()
);

export const loginFailure = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ error: HttpErrorResponse }>()
);

export const logout = createAction(
    AuthActionTypes.LOGOUT
);

export const logoutSuccess = createAction(
    AuthActionTypes.LOGOUT_SUCCESS
);

export const logoutFailure = createAction(
    AuthActionTypes.LOGOUT_FAILURE,
    props<{ error: HttpErrorResponse }>()
);
