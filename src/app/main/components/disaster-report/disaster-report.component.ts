import { Component, NgZone, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../../services/location.service';
import { DisasterService } from '../../services/disaster.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ng-disaster-report',
  templateUrl: './disaster-report.component.html',
  styleUrl: './disaster-report.component.scss',
})
export class DisasterReportComponent {
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

  constructor(
    locService: LocationService,
    disasterService: DisasterService,
    app: AppService
  ) {
    app.dataLoaded.subscribe(async (loaded) => {
      if (!loaded) return;

      const position = locService.getCurrent();
      const disasters = disasterService.getReponse()?.features;

      if (!disasters) return;

      this.layers = [
        L.marker([position.lat, position.lon]).bindPopup('You are here'),
      ];

      for (let i = 0; i < disasters.length; i++) {
        const disaster = disasters[i];

        if (
          !isNaN(disaster.geometry.coordinates[1]) &&
          !isNaN(disaster.geometry.coordinates[0])
        )
          this.layers.push(
            L.marker(
              [
                disaster.geometry.coordinates[1],
                disaster.geometry.coordinates[0],
              ],
              {
                icon: L.icon({
                  iconUrl: disaster.properties.icon,
                }),
              }
            ).bindPopup(disaster.properties.name)
          );
      }
    });
  }
}
