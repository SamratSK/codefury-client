import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) {}

  showAuth() {
    const user = this.auth.getCurrentUser();

    if (!user)
      this.router.navigate(['/auth/signup'])
    else
      alert(`${user}, you are already logged in successfully!`);
  }
}
