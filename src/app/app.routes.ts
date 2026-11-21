import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'PostPilot | Social media automation',
    loadComponent: () => import('./pages/landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'signin',
    title: 'Sign in | PostPilot',
    loadComponent: () => import('./pages/signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'signup',
    title: 'Sign up | PostPilot',
    loadComponent: () => import('./pages/signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'dashboard',
    title: 'Dashboard | PostPilot',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  { path: '**', redirectTo: '' },
];
