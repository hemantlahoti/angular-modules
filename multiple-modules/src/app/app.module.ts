import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondmoduleModule} from './secondmodule/secondmodule.module';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginModule } from 'login-multiple-module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondmoduleModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
