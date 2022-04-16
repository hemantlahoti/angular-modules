import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'login-multiple-module';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'secondmodule' },
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'login1', component: LoginComponent },
  {
    path: 'secondmodule',
    loadChildren: './secondmodule/secondmodule.module#SecondmoduleModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
