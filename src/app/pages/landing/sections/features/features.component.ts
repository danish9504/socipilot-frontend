import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../../components/info-card/info-card.component';
import { SectionHeadingComponent } from '../../../../components/section-heading/section-heading.component';

@Component({
  selector: 'app-features',
  imports: [SectionHeadingComponent, InfoCardComponent],
  template: `
    <section id="features" class="container section">
      <app-section-heading
        title="Everything you need to"
        highlight="grow"
        subtitle="Powerful tools, simple design."
      />
      <div class="grid-3">
        @for (f of features; track f.title) {
          <app-info-card [badge]="f.icon" [title]="f.title" [text]="f.text" />
        }
      </div>
    </section>
  `,
  styles: `:host { display: block; }`,
})
export class FeaturesComponent {
  features = [
    { icon: '💬', title: 'Auto Comments', text: 'Reply to comments instantly with smart rules, keywords and friendly templates.' },
    { icon: '🎬', title: 'Reels & Shorts Posting', text: 'Upload once and publish reels, shorts and videos to every connected account.' },
    { icon: '🗓️', title: 'Smart Scheduler', text: 'Plan weeks of content in one calendar and post at the best time automatically.' },
    { icon: '✨', title: 'AI Captions', text: 'Generate captions and hashtags that match your brand voice in seconds.' },
    { icon: '📥', title: 'Unified Inbox', text: 'Read and answer comments and messages from all platforms in one place.' },
    { icon: '📈', title: 'Analytics', text: 'Track reach, engagement and growth with clean, easy-to-read reports.' },
  ];
}
