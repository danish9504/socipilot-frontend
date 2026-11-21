import { Component } from '@angular/core';
import { LogoComponent } from '../../../../components/logo/logo.component';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent],
  template: `
    <footer class="container footer-inner">
      <app-logo />
      <span class="muted">© {{ year }} PostPilot. All rights reserved.</span>
    </footer>
  `,
  styles: `
    :host { display: block; padding: 30px 0; margin-top: 30px; }
    .footer-inner { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; }
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
