import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';
import { DisasterService } from './services/disaster.service';

@Component({
  selector: 'ng-main-base',
  templateUrl: './main-base.component.html',
  styleUrl: './main-base.component.scss',
})
export class MainBaseComponent implements OnInit {
  constructor(
    private locService: LocationService,
    private disasterService: DisasterService
  ) {}

  async ngOnInit() {
    await this.locService.init();
    await this.disasterService.init();
  }
}
