import { Component, OnInit } from '@angular/core';
import { GlideService } from './services/glide.service';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private glideService: GlideService) {}

  ngOnInit(): void {}

  click() {
  }
}
