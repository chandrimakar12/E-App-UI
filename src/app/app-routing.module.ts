import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeDetailsComponent } from './components/ae/ae-details/ae-details.component';
import { AuthGuard } from './components/guards/auth.guard';
import { RoleGuard } from './components/guards/role.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HcoinfoDetailsComponent } from './components/user/hcoinfo-details/hcoinfo-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },  
  {
    path:'user',
    component:HcoinfoDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'ae',
    component:AeDetailsComponent,
    canActivate:[RoleGuard],
    
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
