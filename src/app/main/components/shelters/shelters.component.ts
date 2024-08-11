import { Component } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../../services/location.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ng-shelters',
  templateUrl: './shelters.component.html',
  styleUrl: './shelters.component.scss',
})
export class SheltersComponent {
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
      }),
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629), // Center on India
  };

  layers: L.Marker[] = [];

  constructor(locService: LocationService, app: AppService) {
    app.dataLoaded.subscribe((loaded) => {
      if (!loaded) return;
      console.log('rendered');

      const position = locService.getCurrent();
      const shelters = locService.getEmergencyHospitals();

      if (!shelters) return;

      this.layers = [
        L.marker([position.lat, position.lon], {
          
        }).bindPopup('You are here'),
      ];

      for (let i = 0; i < shelters.length; i++) {
        const shelter = shelters[i];

        if (!isNaN(shelter.position.lat) && !isNaN(shelter.position.lng))
          this.layers.push(
            L.marker([shelter.position.lat, shelter.position.lng]).bindPopup(
              shelter.title
            )
          );
      }
    });
  }
}
