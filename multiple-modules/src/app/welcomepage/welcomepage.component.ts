import { Component, OnInit } from '@angular/core';
import { LoginService } from 'login-multiple-module';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  loginService: LoginService;
  constructor(loginService: LoginService) {
    this.loginService =  loginService;
   }

  ngOnInit(): void {
    this.loginService.SetUsername('Hemant');
    this.loginService.SetPassword('Lahoti');
  }

}
