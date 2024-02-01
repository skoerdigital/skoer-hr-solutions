
import { Routes } from '@angular/router';

import { AuthComponent } from './feature/auth.component';
import { authConfig } from './auth.config';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        providers: authConfig.providers,
    },
];
