import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-emergency-base',
  templateUrl: './emergency-base.component.html',
  styleUrl: './emergency-base.component.scss'
})
export class EmergencyBaseComponent {
  emergencies = [
    'Cyclone',
    'Earthquake',
    'Flood',
    'Landslide',
    'Tsunami',
  ];
  selected = this.emergencies[0];

  constructor(private router: Router) {}

  select(value: string) {
    this.selected = value;
  }
}
