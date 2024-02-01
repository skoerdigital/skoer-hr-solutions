import { Component, Injector, Input, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'skoer-hr-solutions-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  protected control!: FormControl;
  private readonly injector = inject(Injector);
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() errorMessage!: { [errorKey: string]: string };
  @Input({ required: true }) type!: InputType;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  ngOnInit(): void {
    this.setFormControl();
  }

  setFormControl(): void {
    try {
      const formControl = this.injector.get(NgControl);

      if (formControl instanceof FormControlName) {
        this.control = this.injector
          .get(FormGroupDirective)
          .getControl(formControl as FormControlName);

        return;
      }

      this.control = (formControl as FormControlDirective).form as FormControl;
    } catch (err) {
      this.control = new FormControl();
    }
  }

  writeValue(value: string): void {
    this.control
    ? this.control.setValue(value)
    : (this.control = new FormControl(value));
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

