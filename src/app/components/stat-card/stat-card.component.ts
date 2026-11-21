import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <div class="neu-card stat">
      <span class="ico neu-pressed">{{ icon() }}</span>
      <div>
        <strong>{{ value() }}</strong>
        <small>{{ label() }}</small>
        @if (change()) {
          <em [class.up]="positive()" [class.down]="!positive()">{{ change() }}</em>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .stat { display: flex; align-items: center; gap: 16px; padding: 22px; height: 100%; }
    .ico { display: grid; place-items: center; width: 54px; height: 54px; font-size: 1.5rem; flex-shrink: 0; }
    strong { display: block; font-size: 1.5rem; color: var(--accent); }
    small { display: block; color: var(--text-soft); }
    em { display: block; margin-top: 4px; font-style: normal; font-size: 0.75rem; font-weight: 600; }
    em.up { color: var(--success); }
    em.down { color: var(--danger); }
  `,
})
export class StatCardComponent {
  icon = input.required<string>();
  label = input.required<string>();
  value = input.required<string>();
  change = input('');
  positive = input(true);
}
