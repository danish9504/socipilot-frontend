import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Plan {
  name: string;
  price: string;
  note: string;
  perks: string[];
  featured: boolean;
}

@Component({
  selector: 'app-pricing-card',
  imports: [RouterLink],
  template: `
    <article class="neu-card plan" [class.featured]="plan().featured">
      @if (plan().featured) {
        <span class="popular">Most popular</span>
      }
      <h3>{{ plan().name }}</h3>
      <div class="price">{{ plan().price }}<small>/month</small></div>
      <p class="muted">{{ plan().note }}</p>
      <ul>
        @for (perk of plan().perks; track perk) {
          <li>✓ {{ perk }}</li>
        }
      </ul>
      <a routerLink="/signup" class="btn" [class.btn-primary]="plan().featured">
        Choose {{ plan().name }}
      </a>
    </article>
  `,
  styles: `
    :host { display: block; }
    .plan { position: relative; height: 100%; padding: 34px 28px; text-align: center; }
    .plan.featured { transform: scale(1.04); }
    .popular { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); padding: 6px 16px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; color: #fff; background: linear-gradient(135deg, var(--accent), var(--accent-2)); }
    .price { font-size: 2.6rem; font-weight: 800; margin: 10px 0 4px; }
    .price small { font-size: 0.9rem; font-weight: 500; color: var(--text-soft); }
    ul { list-style: none; padding: 0; margin: 22px 0 28px; text-align: left; }
    li { padding: 9px 0; color: var(--text-soft); }
    @media (max-width: 900px) { .plan.featured { transform: none; } }
  `,
})
export class PricingCardComponent {
  plan = input.required<Plan>();
}
