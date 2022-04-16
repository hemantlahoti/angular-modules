import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login-component.component';
import {SecondmoduleRoutingModule } from './secondmodule.routing'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecondmoduleRoutingModule
  ],
  exports: [LoginComponent]
})
export class SecondmoduleModule { }
