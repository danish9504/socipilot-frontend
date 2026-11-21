import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthCardComponent } from '../../components/auth-card/auth-card.component';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { SocialLoginComponent } from '../../components/social-login/social-login.component';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink, AuthCardComponent, FormFieldComponent, SocialLoginComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loading = false;
  message = '';

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [true],
  });

  submit(): void {
    this.message = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // TODO: replace this demo with your real login API call
    console.log('Sign in data:', this.form.getRawValue());
    setTimeout(() => {
      this.loading = false;
      this.router.navigateByUrl('/dashboard');
    }, 800);
  }

  socialLogin(provider: string): void {
    // TODO: start OAuth flow for the provider
    console.log('Social login:', provider);
  }
}
