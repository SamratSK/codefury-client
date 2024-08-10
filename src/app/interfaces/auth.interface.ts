export interface User {
  name: string;
  email: string;
  phone: string;
  password_hash: string;
}

export interface SignupData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}