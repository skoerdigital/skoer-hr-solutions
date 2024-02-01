import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginRequest, TokenResponse } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export enum AuthActionTypes {
    LOGIN = 'Login',
    LOGIN_SUCCESS = 'Login Success',
    LOGIN_FAILURE = 'Login Failure',
    LOGOUT = 'Logout',
    LOGOUT_SUCCESS = 'Logout Success',
    LOGOUT_FAILURE = 'Logout Failure'
}

export const AuthActions = createActionGroup({
    source: '[Auth]',
    events: {
        [AuthActionTypes.LOGIN]: props<{ request: LoginRequest }>(),
        [AuthActionTypes.LOGIN_SUCCESS]: props<{ response: TokenResponse }>(),
        [AuthActionTypes.LOGIN_FAILURE]: props<{ error: HttpErrorResponse }>(),
        [AuthActionTypes.LOGOUT]: emptyProps(),
        [AuthActionTypes.LOGOUT_SUCCESS]: emptyProps(),
        [AuthActionTypes.LOGOUT_FAILURE]: props<{ error: HttpErrorResponse }>()
    },
});
