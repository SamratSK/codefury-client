import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DisasterService } from './services/disaster.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [AppComponent, MapComponent], // Declare your components here
  imports: [BrowserModule, LeafletModule],
  providers: [DisasterService, provideHttpClient()], // Add your services here
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
