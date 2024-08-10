import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './components/map/map.component';
import { SosComponent } from './components/sos/sos.component';

import { provideHttpClient } from '@angular/common/http';

import { DisasterService } from './services/disaster.service';
import { LocationService } from './services/location.service';
import { ConstantsService } from './services/constants.service';
import { MainBaseComponent } from './main-base.component';
import { EmergencyKitComponent } from './components/emergency-kit/emergency-kit.component';

@NgModule({
  declarations: [MainBaseComponent, MapComponent, SosComponent, EmergencyKitComponent],
  providers: [
    DisasterService,
    LocationService,
    ConstantsService,
    provideHttpClient(),
  ],
  imports: [CommonModule, LeafletModule],
})
export class MainModule {}
