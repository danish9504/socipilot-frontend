import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <button type="button" class="neu-btn burger" aria-label="Menu" (click)="menuToggle.emit()">
        ☰
      </button>
      <h1>{{ title() }}</h1>
      <div class="spacer"></div>
      <span class="user neu-pressed">👤 {{ userName() }}</span>
      <a routerLink="/signin" class="btn btn-small">Log out</a>
    </header>
  `,
  styles: `
    :host { display: block; }
    .topbar { display: flex; align-items: center; gap: 16px; padding: 22px 28px 0; }
    h1 { margin: 0; font-size: 1.5rem; }
    .spacer { flex: 1; }
    .user { padding: 10px 18px; border-radius: 999px; font-size: 0.85rem; font-weight: 600; }
    .burger { display: none; width: 44px; height: 44px; font-size: 1.1rem; }
    @media (max-width: 900px) {
      .burger { display: block; }
      .topbar { padding: 18px 18px 0; }
    }
  `,
})
export class TopbarComponent {
  title = input.required<string>();
  userName = input('Creator');
  menuToggle = output<void>();
}
