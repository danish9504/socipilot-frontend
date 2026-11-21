import { Component } from '@angular/core';
import { CtaComponent } from './sections/cta/cta.component';
import { FeaturesComponent } from './sections/features/features.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { PlatformsComponent } from './sections/platforms/platforms.component';
import { PricingComponent } from './sections/pricing/pricing.component';

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, HeroComponent, PlatformsComponent, FeaturesComponent, HowItWorksComponent, PricingComponent, CtaComponent, FooterComponent],
  template: `
    <app-navbar />
    <main id="home">
      <app-hero />
      <app-platforms />
      <app-features />
      <app-how-it-works />
      <app-pricing />
      <app-cta />
    </main>
    <app-footer />
  `,
  styles: `:host { display: block; }`,
})
export class LandingComponent {}
