import { Injectable } from '@angular/core';
import { LoginData, SignupData, User } from '../interfaces/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE = '.';

  private LOGIN_URL = `${this.BASE}/api/login`;
  private SIGNUP_URL = `${this.BASE}/api/signup`;

  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  async login(data: LoginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.currentUser = await firstValueFrom(
      this.http.post<User>(this.LOGIN_URL, JSON.stringify(data), { headers })
    );
  }

  async signup(data: SignupData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.currentUser = await firstValueFrom(
      this.http.post<User>(this.SIGNUP_URL, JSON.stringify(data), { headers })
    );
  }
}
