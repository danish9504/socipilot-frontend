import { Component, input } from '@angular/core';

// Used for feature cards (emoji badge) and step cards (number badge)
@Component({
  selector: 'app-info-card',
  template: `
    <article class="neu-card card">
      <div class="badge neu-pressed">{{ badge() }}</div>
      <h3>{{ title() }}</h3>
      <p>{{ text() }}</p>
    </article>
  `,
  styles: `
    :host { display: block; }
    .card { padding: 30px; height: 100%; transition: transform 0.25s ease; }
    .card:hover { transform: translateY(-5px); }
    .badge { display: grid; place-items: center; width: 58px; height: 58px; font-size: 1.6rem; font-weight: 800; color: var(--accent); }
    h3 { margin: 18px 0 8px; }
    p { margin: 0; color: var(--text-soft); line-height: 1.6; }
  `,
})
export class InfoCardComponent {
  badge = input.required<string | number>();
  title = input.required<string>();
  text = input.required<string>();
}
