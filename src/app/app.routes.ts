import { Routes } from '@angular/router';

import { MainBaseComponent } from './main/main-base.component';
import { EmergencyKitComponent } from './main/components/emergency-kit/emergency-kit.component';
import { SosComponent } from './main/components/sos/sos.component';
import { ContactComponent } from './main/components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainBaseComponent },
  { path: 'sos', component: SosComponent },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
  },
  { path: '**', redirectTo: '/home' },
];
