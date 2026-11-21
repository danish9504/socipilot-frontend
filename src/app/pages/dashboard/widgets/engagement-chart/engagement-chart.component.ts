import { Component } from '@angular/core';

@Component({
  selector: 'app-engagement-chart',
  template: `
    <section class="neu-card panel">
      <h3>Weekly engagement</h3>
      <div class="bars neu-pressed">
        @for (d of days; track d.label) {
          <div class="col">
            <div class="track"><span class="bar" [style.height.%]="d.value"></span></div>
            <small>{{ d.label }}</small>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .panel { padding: 26px; height: 100%; }
    h3 { margin: 0 0 18px; }
    .bars { display: flex; gap: 14px; padding: 18px; }
    .col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .track { width: 100%; height: 150px; display: flex; align-items: flex-end; }
    .bar { width: 100%; border-radius: 8px 8px 4px 4px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); }
    small { color: var(--text-soft); font-size: 0.75rem; }
  `,
})
export class EngagementChartComponent {
  // Demo data (0 to 100). Replace with analytics from your API
  days = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 62 },
    { label: 'Wed', value: 48 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 68 },
    { label: 'Sat', value: 92 },
    { label: 'Sun', value: 74 },
  ];
}
