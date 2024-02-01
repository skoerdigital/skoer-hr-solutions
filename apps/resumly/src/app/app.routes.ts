import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: 'login', loadChildren: () => import('@skoer-hr-solutions/auth').then(m => m.AUTH_ROUTES) },
    {
        path: '',
        children: [
            // Add your child routes here
        ],
        outlet: 'secondary',
    },
    {
        path: '404',
        loadComponent: () => import('@skoer-hr-solutions/error-page').then(m => m.ErrorPageComponent),
        data: {
            code: 404,
            message: 'Page Not Found',
            description: 'The page you are looking for does not exist.',
        },
    },
    { path: '**', redirectTo: '404' },

];
