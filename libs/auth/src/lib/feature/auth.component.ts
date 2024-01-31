import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormOf } from '@skoer-hr-solutions/shared/utils';
import { LoginFormSchema } from '../data-access/models';
import { AuthorizationService } from '../data-access/services';

@Component({
  selector: 'skoer-hr-solutions-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  private readonly authorizationService = inject(AuthorizationService);
  private readonly formBuilder = inject(FormBuilder).nonNullable;

  readonly loginForm: FormOf<LoginFormSchema> = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  onSubmit(): void {
   this.authorizationService.login(this.loginForm.getRawValue()).subscribe();
  }
}
