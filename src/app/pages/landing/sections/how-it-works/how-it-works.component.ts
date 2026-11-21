import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../../components/info-card/info-card.component';
import { SectionHeadingComponent } from '../../../../components/section-heading/section-heading.component';

@Component({
  selector: 'app-how-it-works',
  imports: [SectionHeadingComponent, InfoCardComponent],
  template: `
    <section id="how" class="container section">
      <app-section-heading title="How it works" subtitle="Three easy steps." />
      <div class="grid-3">
        @for (s of steps; track s.title; let i = $index) {
          <app-info-card [badge]="i + 1" [title]="s.title" [text]="s.text" />
        }
      </div>
    </section>
  `,
  styles: `:host { display: block; }`,
})
export class HowItWorksComponent {
  steps = [
    { title: 'Connect accounts', text: 'Link your social profiles securely in a few clicks.' },
    { title: 'Create your rules', text: 'Choose what to post and how to reply automatically.' },
    { title: 'Relax and grow', text: 'Automation runs in the background while you focus on ideas.' },
  ];
}
