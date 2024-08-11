import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  responseMessage: string | null = null;
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        const user = await this.authService.login({ email, password });
        console.log('Login successful', user);
        // Redirect or perform any other action on successful login
      } catch (error) {
        console.error('Login failed', error);
        // Handle login error
      }
    } else {
      console.error('Form is invalid');
      // Handle form invalid case
    }
  }
}
