import { Component } from '@angular/core';

@Component({
  selector: 'app-platforms',
  template: `
    <section class="container platforms">
      <p class="muted center">Works with the platforms you already use</p>
      <div class="chips">
        @for (p of platforms; track p) {
          <span class="chip neu-card">{{ p }}</span>
        }
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .platforms { padding: 40px 0; }
    .chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px; margin-top: 18px; }
    .chip { padding: 12px 24px; border-radius: 999px; font-weight: 600; font-size: 0.9rem; }
  `,
})
export class PlatformsComponent {
  platforms = ['Instagram', 'Facebook', 'X (Twitter)', 'LinkedIn', 'YouTube', 'TikTok'];
}
