import { Component, OnInit } from '@angular/core';
import { LoginService } from 'login-multiple-module';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  username: string;
  password: string;
  username2: string;
  password2: string;
  constructor(private loginService: LoginService, public globalService: GlobalService) {
   }

  ngOnInit(): void {
    this.username = this.globalService.GetUsername();
    this.password = this.globalService.GetPassword();
    this.username2 = this.loginService.GetUsername();
    this.password2 = this.loginService.GetPassword();

  }

}
