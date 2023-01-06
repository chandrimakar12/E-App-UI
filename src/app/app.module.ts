import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HcoinfoDetailsComponent } from './components/user/hcoinfo-details/hcoinfo-details.component';
import { HcoinfoFormComponent } from './components/user/hcoinfo-details/hcoinfo-form/hcoinfo-form.component';
import { AeDetailsComponent } from './components/ae/ae-details/ae-details.component';
import { AeFormComponent } from './components/ae/ae-details/ae-form/ae-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HcoinfoDetailsComponent,
    HcoinfoFormComponent,
    AeDetailsComponent,
    AeFormComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
