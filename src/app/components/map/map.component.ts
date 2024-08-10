import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ng-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
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

  layers = [
    L.marker([28.7041, 77.1025]).bindPopup('Delhi'), // Example Marker
    L.marker([19.076, 72.8777]).bindPopup('Mumbai'), // Example Marker
    L.marker([13.0827, 80.2707]).bindPopup('Chennai'), // Example Marker
  ];

  constructor() {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '../../../assets/images/marker-icon-2x.png',
      iconUrl: '../../../assets/images/marker-icon.png',
      shadowUrl: '../../../assets/images/marker-shadow.png'
    });
    // Example markers; in real application, this would come from your data source
    // this.markers = [
    //   {
    //     position: { lat: 28.6139, lng: 77.209 },
    //     label: { color: 'red', text: 'Disaster Location 1' },
    //   },
    //   {
    //     position: { lat: 27.1767, lng: 78.0081 },
    //     label: { color: 'blue', text: 'Disaster Location 2' },
    //   },
    // ];
  }
}
