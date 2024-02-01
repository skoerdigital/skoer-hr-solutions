import { APP_INITIALIZER } from "@angular/core";
import { initFlowbite } from 'flowbite';

export const provideFlowbite = () => ({
    provide: APP_INITIALIZER,
    useFactory: () => () => initFlowbite(),
    multi: true,
});