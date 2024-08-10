import { Routes } from '@angular/router';

import { MainBaseComponent } from './main/main-base.component';
import { EmergencyKitComponent } from './main/components/emergency-kit/emergency-kit.component';
import { SosComponent } from './main/components/sos/sos.component';

export const routes: Routes = [
  { path: '', component: MainBaseComponent },
  { path: 'emergency-kit', component: EmergencyKitComponent },
  { path: 'sos', component: SosComponent },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
  },
  { path: '**', redirectTo: '/home' },
];
