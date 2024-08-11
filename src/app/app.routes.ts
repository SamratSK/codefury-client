import { Routes } from '@angular/router';

import { MainBaseComponent } from './main/main-base.component';
import { SosComponent } from './main/components/sos/sos.component';

export const routes: Routes = [
  { path: '', component: MainBaseComponent },
  { path: 'sos', component: SosComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/home' },
];
