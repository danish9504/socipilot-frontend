import { Component } from '@angular/core';
import { Plan, PricingCardComponent } from '../../../../components/pricing-card/pricing-card.component';
import { SectionHeadingComponent } from '../../../../components/section-heading/section-heading.component';

@Component({
  selector: 'app-pricing',
  imports: [SectionHeadingComponent, PricingCardComponent],
  template: `
    <section id="pricing" class="container section">
      <app-section-heading
        title="Simple"
        highlight="pricing"
        subtitle="Start free. Upgrade when you grow."
      />
      <div class="grid-3">
        @for (plan of plans; track plan.name) {
          <app-pricing-card [plan]="plan" />
        }
      </div>
    </section>
  `,
  styles: `:host { display: block; }`,
})
export class PricingComponent {
  plans: Plan[] = [
    {
      name: 'Starter',
      price: '$0',
      note: 'For trying things out',
      perks: ['2 social accounts', '10 scheduled posts', 'Basic analytics'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$19',
      note: 'For creators and freelancers',
      perks: ['10 social accounts', 'Unlimited scheduling', 'Auto comment replies', 'AI captions'],
      featured: true,
    },
    {
      name: 'Agency',
      price: '$49',
      note: 'For teams and clients',
      perks: ['50 social accounts', 'Team members', 'White-label reports', 'Priority support'],
      featured: false,
    },
  ];
}
