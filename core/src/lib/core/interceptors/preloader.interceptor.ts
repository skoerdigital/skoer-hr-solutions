import { Injectable, Provider } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable, finalize } from 'rxjs';
import { PreloaderService } from '@skoer-hr-solutions/data-access';

@Injectable()
class PreloaderInterceptor implements HttpInterceptor {
    constructor(private preloaderService: PreloaderService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.preloaderService.show();

        return next.handle(request).pipe(
            finalize(() => {
                this.preloaderService.hide();
            })
        );
    }
}

export function providePreloaderInterceptor(): Provider {
    return {
        provide: HTTP_INTERCEPTORS,
        useClass: PreloaderInterceptor,
        multi: true
    };
}

