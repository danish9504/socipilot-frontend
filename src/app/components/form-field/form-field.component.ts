import { Component, computed, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// Label + input + error message (+ show/hide button for passwords)
@Component({
  selector: 'app-form-field',
  imports: [ReactiveFormsModule],
  template: `
    <div class="field">
      <label [attr.for]="inputId()">{{ label() }}</label>

      <div class="input-wrap">
        <input
          class="input"
          [id]="inputId()"
          [type]="inputType()"
          [formControl]="control()"
          [placeholder]="placeholder()"
          [attr.autocomplete]="autocomplete()"
          [class.invalid]="!!message()"
        />
        @if (type() === 'password') {
          <button
            type="button"
            class="neu-btn toggle-pass"
            (click)="showPassword.set(!showPassword())"
          >
            {{ showPassword() ? 'Hide' : 'Show' }}
          </button>
        }
      </div>

      <ng-content />

      @if (message()) {
        <p class="error">{{ message() }}</p>
      }
    </div>
  `,
  styles: `:host { display: block; }`,
})
export class FormFieldComponent {
  inputId = input.required<string>();
  label = input.required<string>();
  control = input.required<FormControl<string>>();
  type = input<'text' | 'email' | 'password'>('text');
  placeholder = input('');
  autocomplete = input('off');
  extraError = input(''); // for errors from the parent form, like "passwords do not match"

  showPassword = signal(false);
  inputType = computed(() =>
    this.type() === 'password' && this.showPassword() ? 'text' : this.type(),
  );

  message(): string {
    const c = this.control();

    if (c.invalid && (c.touched || c.dirty)) {
      if (c.hasError('required')) return `${this.label()} is required.`;
      if (c.hasError('email')) return 'Please enter a valid email.';
      if (c.hasError('minlength')) {
        return `Must be at least ${c.getError('minlength').requiredLength} characters.`;
      }
      return 'This value is not valid.';
    }

    return this.extraError();
  }
}
