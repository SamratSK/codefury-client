import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './education.routes';

import { CycloneComponent } from './components/cyclone/cyclone.component';
import { EarthquakeComponent } from './components/earthquake/earthquake.component';
import { FloodComponent } from './components/flood/flood.component';
import { LandslideComponent } from './components/landslide/landslide.component';
import { TsunamiComponent } from './components/tsunami/tsunami.component';
import { EmergencyBaseComponent } from './emergency-base.component';

@NgModule({
  declarations: [
    EmergencyBaseComponent,
    CycloneComponent,
    EarthquakeComponent,
    FloodComponent,
    LandslideComponent,
    TsunamiComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EducationModule {}
