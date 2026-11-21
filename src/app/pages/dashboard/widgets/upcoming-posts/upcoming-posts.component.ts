import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-posts',
  template: `
    <section class="neu-card panel">
      <h3>Upcoming posts</h3>

      @for (p of posts; track p.title) {
        <div class="row neu-pressed">
          <span class="info">
            <span class="icon">{{ p.icon }}</span>
            <span>
              <strong>{{ p.title }}</strong>
              <small>{{ p.platform }} · {{ p.when }}</small>
            </span>
          </span>
          <em class="tag" [class.ok]="p.status === 'Scheduled'" [class.wait]="p.status !== 'Scheduled'">
            {{ p.status }}
          </em>
        </div>
      }
    </section>
  `,
  styles: `
    :host { display: block; }
    .panel { padding: 26px; height: 100%; }
    h3 { margin: 0 0 18px; }
    .row { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 14px 16px; margin-bottom: 14px; }
    .info { display: flex; align-items: center; gap: 12px; }
    .icon { font-size: 1.4rem; }
    strong { display: block; font-size: 0.9rem; }
    small { color: var(--text-soft); font-size: 0.78rem; }
    .tag { font-style: normal; font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; white-space: nowrap; }
    .tag.ok { color: var(--success); background: rgba(31, 157, 116, 0.12); }
    .tag.wait { color: #c58a1b; background: rgba(197, 138, 27, 0.14); }
  `,
})
export class UpcomingPostsComponent {
  // Demo data. Replace with scheduled posts from your API
  posts = [
    { icon: '🎬', title: 'Morning routine reel', platform: 'Instagram', when: 'Today, 6:00 PM', status: 'Scheduled' },
    { icon: '📸', title: 'Product carousel', platform: 'Facebook', when: 'Tomorrow, 10:30 AM', status: 'Scheduled' },
    { icon: '📝', title: 'Weekly tips thread', platform: 'X (Twitter)', when: 'Wed, 9:00 AM', status: 'Draft' },
    { icon: '🎥', title: 'Behind the scenes short', platform: 'YouTube', when: 'Fri, 5:00 PM', status: 'Scheduled' },
  ];
}
