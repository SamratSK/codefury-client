import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import { provideHttpClient } from '@angular/common/http';

import { SosComponent } from './components/sos/sos.component';
import { DisasterService } from './services/disaster.service';
import { LocationService } from './services/location.service';
import { AppService } from './services/app.service';
import { MainBaseComponent } from './main-base.component';
import { EmergencyKitComponent } from './components/emergency-kit/emergency-kit.component';
import { ContactComponent } from './components/contact/contact.component';
import { FirstAidComponent } from './components/first-aid/first-aid.component';
import { DisasterReportComponent } from './components/disaster-report/disaster-report.component';
import { SheltersComponent } from './components/shelters/shelters.component';
import { CycloneComponent } from './components/education/cyclone/cyclone.component';
import { EarthquakeComponent } from './components/education/earthquake/earthquake.component';
import { TsunamiComponent } from './components/education/tsunami/tsunami.component';
import { LandslideComponent } from './components/education/landslide/landslide.component';
import { FloodComponent } from './components/education/flood/flood.component';
import { EmergencyBaseComponent } from './components/education/emergency-base.component';

@NgModule({
  declarations: [
    MainBaseComponent,
    DisasterReportComponent,
    SosComponent,
    EmergencyKitComponent,
    ContactComponent,
    FirstAidComponent,
    SheltersComponent,
    CycloneComponent,
    EarthquakeComponent,
    FloodComponent,
    LandslideComponent,
    TsunamiComponent,
    EmergencyBaseComponent
  ],
  providers: [
    DisasterService,
    LocationService,
    AppService,
    provideHttpClient(),
  ],
  imports: [CommonModule, LeafletModule],
})
export class MainModule {}
