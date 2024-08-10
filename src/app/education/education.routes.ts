import { Routes } from '@angular/router';

import { EarthquakeComponent } from './components/earthquake/earthquake.component';
import { CycloneComponent } from './components/cyclone/cyclone.component';
import { FloodComponent } from './components/flood/flood.component';
import { LandslideComponent } from './components/landslide/landslide.component';
import { TsunamiComponent } from './components/tsunami/tsunami.component';
import { EmergencyBaseComponent } from './emergency-base.component';

export const routes: Routes = [
  {
    path: '',
    component: EmergencyBaseComponent,
    children: [
      { path: 'cyclone', component: CycloneComponent },
      { path: 'earthquake', component: EarthquakeComponent },
      { path: 'flood', component: FloodComponent },
      { path: 'landslide', component: LandslideComponent },
      { path: 'tsunami', component: TsunamiComponent },
    ],
  },
];
