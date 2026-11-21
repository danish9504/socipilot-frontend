import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  template: `
    <section class="container section">
      <div class="neu-card cta">
        <h2>Ready to put your social media on autopilot?</h2>
        <p>Join creators and teams who save hours every week.</p>
        <a routerLink="/signup" class="btn btn-primary">Create free account</a>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .cta { text-align: center; padding: 56px 24px; }
    h2 { margin: 0 0 10px; font-size: clamp(1.5rem, 3vw, 2.1rem); }
    p { color: var(--text-soft); margin: 0 0 26px; }
  `,
})
export class CtaComponent {}
