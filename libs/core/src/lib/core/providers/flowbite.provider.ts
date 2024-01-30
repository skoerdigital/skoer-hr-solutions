import { APP_INITIALIZER } from "@angular/core";
import { initFlowbite } from 'flowbite';

const provideFlowbite = () => ({
    provide: APP_INITIALIZER,
    useFactory: () => () => initFlowbite(),
    multi: true,
});