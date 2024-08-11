import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup;
  responseMessage: string | null = null;
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      // Simulating a successful form submission

      try {
        const user = this.authService.signup(this.signupForm.value);
        this.responseMessage = 'Signup successful!';
        this.isSuccess = true;
        console.log(user);

        setTimeout(() => {
          this.router.navigate(['/auth/login'])
        }, 3000);
      } catch (error) {
        this.isSuccess = false;
        this.responseMessage = 'Signup failed. Please try again.';
      }
    } else {
      this.responseMessage = 'Please fill out all fields correctly.';
      this.isSuccess = false;
    }
  }
}
