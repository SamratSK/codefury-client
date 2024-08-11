import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  responseMessage: string | null = null;
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        await this.authService.login({ email, password });
        this.responseMessage = 'Login successful';
        this.isSuccess = true;

        this.router.navigate(['/']);
      } catch (error) {
        this.responseMessage = 'Login failed';
        this.isSuccess = false;
        // Handle login error
      }
    } else {
      this.responseMessage = 'Form is invalid';
      this.isSuccess = false;
      // Handle form invalid case
    }
  }
}
