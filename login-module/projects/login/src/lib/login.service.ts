import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username: string;
  private password: string;

  SetUsername(value: string) {
    this.username = value;
  }

  SetPassword(value: string) {
    this.password = value;
  }

  GetUsername(){
    return this.username;
  }

  GetPassword() {
    return this.password;
  }

  constructor() { }
}
