import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../../services/location.service';
import { DisasterService } from '../../services/disaster.service';

@Component({
  selector: 'ng-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
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
    private locService: LocationService,
    private disasterService: DisasterService,
    private zone: NgZone
  ) {}

  async ngAfterViewInit() {
    setTimeout(() => {
      const position = this.locService.getCurrent();
      const disasters = this.disasterService.getReponse()?.features;

      if (!disasters) return;

      console.log('hit');

      this.layers = [L.marker([position.lat, position.lon]).bindPopup('HERE')];

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

    console.log(this.layers);
  }
}
