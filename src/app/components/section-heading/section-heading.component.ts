import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <h2 class="title">
      {{ title() }}
      @if (highlight()) {
        <span class="grad">{{ highlight() }}</span>
      }
    </h2>
    @if (subtitle()) {
      <p class="sub">{{ subtitle() }}</p>
    }
  `,
  styles: `
    :host { display: block; }
    .title { text-align: center; font-size: clamp(1.6rem, 3vw, 2.3rem); margin: 0 0 10px; }
    .sub { text-align: center; color: var(--text-soft); margin: 0 0 44px; }
  `,
})
export class SectionHeadingComponent {
  title = input.required<string>();
  highlight = input('');
  subtitle = input('');
}
