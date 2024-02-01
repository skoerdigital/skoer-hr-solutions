import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function emailValidator(checkEmailFn: (email: string) => Observable<boolean>, errorKey: string): AsyncValidatorFn {
    return ({ value: email }: AbstractControl): Observable<ValidationErrors | null> => 
        checkEmailFn(email).pipe(
            map(isValid => isValid ? null : { [errorKey]: true }),
            catchError(() => of(null))
        );
    
}
