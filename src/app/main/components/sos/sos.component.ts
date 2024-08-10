import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-sos',
  templateUrl: './sos.component.html',
  styleUrl: './sos.component.scss',
})
export class SosComponent {
  @ViewChild('beep') beepAudio!: ElementRef<HTMLAudioElement>;

  message: string = 'Sending SOS';
  sosStatus: 'sent' | 'error' | 'sending' = 'sending';

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
