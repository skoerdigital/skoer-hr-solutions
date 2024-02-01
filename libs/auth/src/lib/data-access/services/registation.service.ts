import { Injectable } from '@angular/core';
import { Observable, asyncScheduler, delay, observeOn, of, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // Mocked API call
  checkIsEmailValid(email: string): Observable<boolean> {
    const isEmailValid = email === 'john@mail.com';
    return of(isEmailValid).pipe(observeOn(asyncScheduler), delay(1000));
  }
}
