import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthCardComponent } from '../../components/auth-card/auth-card.component';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { SocialLoginComponent } from '../../components/social-login/social-login.component';

// Checks that password and confirm password are the same
const passwordsMatch: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
};

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink, AuthCardComponent, FormFieldComponent, SocialLoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loading = false;
  message = '';

  form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    },
    { validators: passwordsMatch },
  );

  // Password strength from 0 to 4
  get strength(): number {
    const value = this.form.controls.password.value;
    let score = 0;
    if (value.length >= 8) score++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    return score;
  }

  get strengthLabel(): string {
    return ['', 'Weak', 'Fair', 'Good', 'Strong'][this.strength];
  }

  get mismatchError(): string {
    return this.form.hasError('mismatch') && this.form.controls.confirm.touched
      ? 'Passwords do not match.'
      : '';
  }

  get termsError(): boolean {
    const terms = this.form.controls.terms;
    return terms.invalid && (terms.touched || terms.dirty);
  }

  submit(): void {
    this.message = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // TODO: replace this demo with your real sign up API call
    const { name, email } = this.form.getRawValue();
    console.log('Sign up data:', { name, email });
    setTimeout(() => {
      this.loading = false;
      this.router.navigateByUrl('/dashboard');
    }, 800);
  }

  socialSignup(provider: string): void {
    // TODO: start OAuth flow for the provider
    console.log('Social signup:', provider);
  }
}
