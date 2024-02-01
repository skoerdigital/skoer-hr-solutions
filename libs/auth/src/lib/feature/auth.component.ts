import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';

import { FormOf } from '@skoer-hr-solutions/shared/utils';
import { InlineAlertComponent, InputComponent } from '@skoer-hr-solutions/shared/ui';
import { LoginFormSchema } from '../data-access/models';
import { RegistrationService } from '../data-access/services';
import { emailValidator } from '../utils/validators';
import { AuthFacade } from '../data-access/auth.facade';

const EMAIL_VALIDATOR_ERROR_KEY = 'emailInvalid';
@Component({
  selector: 'skoer-hr-solutions-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InlineAlertComponent, InputComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  private readonly registrationService = inject(RegistrationService);
  private readonly authFacade = inject(AuthFacade);
  protected readonly emailValidationErrorKey = EMAIL_VALIDATOR_ERROR_KEY;
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  readonly loginError$ = this.authFacade.loginError$.pipe(tap(console.log));
  readonly loginForm: FormOf<LoginFormSchema> = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email], [emailValidator((email) => this.registrationService.checkIsEmailValid(email), EMAIL_VALIDATOR_ERROR_KEY)]],
    password: ['', Validators.required],
  })

  get isEmailInvalid(): boolean {
    return this.loginForm.controls.email?.hasError(EMAIL_VALIDATOR_ERROR_KEY) ?? false;
  }

  onLogin(): void {
    const request = this.loginForm.getRawValue();
    this.authFacade.login(request);
  }
}
