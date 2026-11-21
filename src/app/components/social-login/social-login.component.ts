import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-social-login',
  template: `
    <div class="divider">{{ text() }}</div>
    <div class="social-row">
      <button type="button" class="neu-btn social-btn" (click)="chosen.emit('google')">
        🌐 Google
      </button>
      <button type="button" class="neu-btn social-btn" (click)="chosen.emit('facebook')">
        📘 Facebook
      </button>
    </div>
  `,
  styles: `:host { display: block; }`,
})
export class SocialLoginComponent {
  text = input('or continue with');
  chosen = output<string>();
}
