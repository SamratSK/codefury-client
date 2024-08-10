import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit(): void {}

  click() {
  }
}
