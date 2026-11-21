import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  template: `
    <section class="neu-card panel">
      <h3>Recent activity</h3>

      @for (a of activity; track a.text) {
        <div class="row neu-pressed">
          <span>{{ a.icon }} {{ a.text }}</span>
          <small>{{ a.time }}</small>
        </div>
      }
    </section>
  `,
  styles: `
    :host { display: block; }
    .panel { padding: 26px; height: 100%; }
    h3 { margin: 0 0 18px; }
    .row { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 14px 16px; margin-bottom: 14px; font-size: 0.88rem; }
    small { color: var(--text-soft); white-space: nowrap; }
  `,
})
export class RecentActivityComponent {
  // Demo data. Replace with real activity from your API
  activity = [
    { icon: '🎬', text: 'Reel published to Instagram', time: '5 min ago' },
    { icon: '💬', text: 'Auto reply sent on Facebook', time: '42 min ago' },
    { icon: '📸', text: 'Carousel scheduled', time: '3 h ago' },
    { icon: '🔗', text: 'LinkedIn account connected', time: 'Yesterday' },
  ];
}
