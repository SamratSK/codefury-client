import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocationService } from './services/location.service';
import { DisasterService } from './services/disaster.service';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-main-base',
  templateUrl: './main-base.component.html',
  styleUrl: './main-base.component.scss',
})
export class MainBaseComponent implements OnInit {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  readonly subroutes = [
    'First Aid',
    'Emergency Kit',
    'Contact Us',
    'Disaster Reports',
    'Find Shelters',
  ];
  selected = 'none';

  constructor(
    private locService: LocationService,
    private disasterService: DisasterService,
    private app: AppService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.locService.init();
    await this.disasterService.init();
    this.app.updateDataLoaded();
  }

  select(value: string) {
    this.selected = value;
    this.dialog.nativeElement.showModal();
  }

  sos() {
    this.router.navigate(['/sos']);
  }
}
