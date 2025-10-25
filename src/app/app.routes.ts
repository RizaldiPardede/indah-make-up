import { Routes } from '@angular/router';
import { Landing } from './landing/landing';

export const routes: Routes = [
    {
    path: '',
    component: Landing, // 👈 ini route default
  },
  {
    path: '**',
    redirectTo: '', // redirect ke landing page kalau route tidak dikenal
    pathMatch: 'full',
  },

];
