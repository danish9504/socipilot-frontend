import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardPreviewComponent } from '../dashboard-preview/dashboard-preview.component';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, DashboardPreviewComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  stats = [
    { value: '10k+', label: 'Posts scheduled' },
    { value: '6', label: 'Platforms' },
    { value: '24/7', label: 'Auto replies' },
  ];
}
