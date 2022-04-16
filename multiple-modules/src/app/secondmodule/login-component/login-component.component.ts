import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'login-multiple-module';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,
    public globalService: GlobalService,
    public RTR: Router) {
  }

  ngOnInit(): void {
    this.globalService.SetUsername('Hemant');
    this.globalService.SetPassword('Lahoti');
    this.loginService.SetUsername('Hemant2');
    this.loginService.SetPassword('Lahoti2');
  }

  Login() {
    this.RTR.navigate(['/welcome']);
  }

}
