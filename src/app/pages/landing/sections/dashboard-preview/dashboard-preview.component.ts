import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-preview',
  template: `
    <div class="neu-card dash">
      <div class="dash-top">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      </div>

      @for (row of rows; track row.text) {
        <div class="dash-row neu-pressed">
          <span>{{ row.text }}</span>
          <em class="tag" [class.ok]="row.ok" [class.wait]="!row.ok">{{ row.status }}</em>
        </div>
      }

      <div class="bars">
        @for (h of bars; track $index) {
          <span [style.height.%]="h"></span>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .dash { padding: 26px; }
    .dash-top { display: flex; gap: 8px; margin-bottom: 20px; }
    .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--bg); box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light); }
    .dash-row { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 14px 16px; margin-bottom: 14px; font-size: 0.9rem; }
    .tag { font-style: normal; font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; }
    .tag.ok { color: var(--success); background: rgba(31, 157, 116, 0.12); }
    .tag.wait { color: #c58a1b; background: rgba(197, 138, 27, 0.14); }
    .bars { display: flex; align-items: flex-end; gap: 14px; height: 120px; margin-top: 20px; padding: 14px; border-radius: 16px; box-shadow: inset 5px 5px 10px var(--shadow-dark), inset -5px -5px 10px var(--shadow-light); }
    .bars span { flex: 1; border-radius: 8px 8px 4px 4px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); }
  `,
})
export class DashboardPreviewComponent {
  rows = [
    { text: '🎬 Reel: "Morning routine"', status: 'Scheduled', ok: true },
    { text: '💬 Auto reply: "Thanks!"', status: 'Active', ok: true },
    { text: '📸 Carousel post', status: 'Draft', ok: false },
  ];

  bars = [40, 65, 50, 85, 70, 95];
}
