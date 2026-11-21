import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

// Page frame for sign in / sign up. The form goes inside via <ng-content />
@Component({
  selector: 'app-auth-card',
  imports: [RouterLink, LogoComponent],
  template: `
    <section class="auth-page">
      <div class="auth-wrap">
        <div class="auth-top">
          <app-logo />
          <a routerLink="/" class="btn btn-small">← Home</a>
        </div>

        <div class="neu-card auth-card">
          <h1>{{ title() }}</h1>
          <p class="auth-sub">{{ subtitle() }}</p>
          <ng-content />
        </div>
      </div>
    </section>
  `,
  styles: `:host { display: block; }`,
})
export class AuthCardComponent {
  title = input.required<string>();
  subtitle = input('');
}
