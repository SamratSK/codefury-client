import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocationService } from './services/location.service';
import { DisasterService } from './services/disaster.service';

@Component({
  selector: 'ng-main-base',
  templateUrl: './main-base.component.html',
  styleUrl: './main-base.component.scss',
})
export class MainBaseComponent implements OnInit {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  readonly subroutes = ['First Aid', 'Emergency Kit', 'Contact Us', 'Disaster Reports'];
  selected = 'none';

  constructor(
    private locService: LocationService,
    private disasterService: DisasterService
  ) {}

  async ngOnInit() {
    await this.locService.init();
    await this.disasterService.init();
  }

  select(value: string) {
    this.selected = value;
    this.dialog.nativeElement.showModal();
  }
}
