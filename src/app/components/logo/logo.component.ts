import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo"><span class="logo-mark">✈</span> {{ name() }}</a>
  `,
  styles: `:host { display: inline-block; }`,
})
export class LogoComponent {
  name = input('PostPilot');
}
