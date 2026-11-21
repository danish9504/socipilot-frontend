import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <aside class="sidebar neu-card" [class.open]="open()">
      <app-logo />

      <nav>
        @for (item of nav; track item.label) {
          @if (item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="active"
              class="nav-item"
              (click)="closed.emit()"
            >
              <span>{{ item.icon }}</span> {{ item.label }}
            </a>
          } @else {
            <span class="nav-item soon">
              <span>{{ item.icon }}</span> {{ item.label }} <em>Soon</em>
            </span>
          }
        }
      </nav>
    </aside>
  `,
  styles: `
    :host { display: block; }
    .sidebar { position: sticky; top: 16px; height: calc(100vh - 32px); margin: 16px; padding: 24px 18px; overflow-y: auto; }
    nav { display: flex; flex-direction: column; gap: 8px; margin-top: 30px; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 14px; color: var(--text-soft); text-decoration: none; font-weight: 500; font-size: 0.92rem; transition: color 0.2s; }
    a.nav-item:hover { color: var(--accent); }
    .nav-item.active { color: var(--accent); font-weight: 600; box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light); }
    .soon { opacity: 0.55; cursor: not-allowed; }
    .soon em { margin-left: auto; font-style: normal; font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 999px; color: var(--accent); background: rgba(91, 108, 240, 0.12); }

    @media (max-width: 900px) {
      .sidebar { position: fixed; top: 0; left: 0; z-index: 60; height: 100vh; width: 270px; margin: 0; border-radius: 0 24px 24px 0; transform: translateX(-110%); transition: transform 0.25s ease; }
      .sidebar.open { transform: translateX(0); }
    }
  `,
})
export class SidebarComponent {
  open = input(false);
  closed = output<void>();

  // Items without a path are pages we will build later
  nav = [
    { label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { label: 'Workspaces', icon: '🏢', path: '' },
    { label: 'Social accounts', icon: '🔗', path: '' },
    { label: 'Content calendar', icon: '🗓️', path: '' },
    { label: 'Publishing', icon: '🎬', path: '' },
    { label: 'Inbox', icon: '📥', path: '' },
    { label: 'Automations', icon: '⚡', path: '' },
    { label: 'Analytics', icon: '📈', path: '' },
    { label: 'Settings', icon: '⚙️', path: '' },
  ];
}
