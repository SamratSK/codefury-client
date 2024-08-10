import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-emergency-base',
  templateUrl: './emergency-base.component.html',
  styleUrl: './emergency-base.component.scss'
})
export class EmergencyBaseComponent {
  emergencies = [
    {
      name: 'Cyclone',
      route: '/education/cyclone'
    },
    {
      name: 'Earthquake',
      route: '/education/earthquake'
    },
    {
      name: 'Flood',
      route: '/education/flood'
    },
    {
      name: 'Landslide',
      route: '/education/landslide'
    },
    {
      name: 'Tsunami',
      route: '/education/tsunami'
    }
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
