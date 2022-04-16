import { NgModule } from '@angular/core';
import { LoginComponent } from './login-component/login-component.component';
import {SecondmoduleRoutingModule } from './secondmodule.routing';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SecondmoduleRoutingModule,
    ServicesModule
  ],
  exports: [LoginComponent]
})
export class SecondmoduleModule { }
