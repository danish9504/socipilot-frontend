import { Component } from '@angular/core';

@Component({
  selector: 'app-connected-accounts',
  template: `
    <section class="neu-card panel">
      <h3>Connected accounts</h3>

      @for (a of accounts; track a.name) {
        <div class="row neu-pressed">
          <span class="info">
            <span class="icon">{{ a.icon }}</span>
            <span>
              <strong>{{ a.name }}</strong>
              <small>{{ a.handle }}</small>
            </span>
          </span>
          <em class="tag" [class.ok]="a.connected" [class.warn]="!a.connected">
            {{ a.connected ? 'Connected' : 'Reconnect' }}
          </em>
        </div>
      }

      <button type="button" class="btn btn-small add">+ Connect account</button>
    </section>
  `,
  styles: `
    :host { display: block; }
    .panel { padding: 26px; height: 100%; }
    h3 { margin: 0 0 18px; }
    .row { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 12px 16px; margin-bottom: 14px; }
    .info { display: flex; align-items: center; gap: 12px; }
    .icon { font-size: 1.4rem; }
    strong { display: block; font-size: 0.9rem; }
    small { color: var(--text-soft); font-size: 0.78rem; }
    .tag { font-style: normal; font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; }
    .tag.ok { color: var(--success); background: rgba(31, 157, 116, 0.12); }
    .tag.warn { color: #c58a1b; background: rgba(197, 138, 27, 0.14); }
    .add { margin-top: 6px; }
  `,
})
export class ConnectedAccountsComponent {
  // Demo data. Replace with your connected accounts from the API
  accounts = [
    { name: 'Instagram', handle: '@yourpage', icon: '📸', connected: true },
    { name: 'Facebook', handle: 'Your Page', icon: '📘', connected: true },
    { name: 'X (Twitter)', handle: '@yourhandle', icon: '🐦', connected: false },
    { name: 'LinkedIn', handle: 'Your Company', icon: '💼', connected: true },
  ];
}
