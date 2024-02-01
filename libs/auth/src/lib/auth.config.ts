import { ApplicationConfig } from "@angular/core";
import { provideState } from "@ngrx/store";
import { AuthEffects, authFeature } from "./data-access/store";
import { provideAuthFacade } from "./data-access/auth.facade";
import { provideEffects } from "@ngrx/effects";

export const authConfig: ApplicationConfig = {
    providers: [
        provideState(authFeature),
        provideEffects(AuthEffects),
        provideAuthFacade(),
    ],
};
  