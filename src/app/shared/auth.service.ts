import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="http://localhost:42578/api/";

  private userPayload:any;

  constructor(private http:HttpClient, private route: Router) {
    this.userPayload = this.decodedToken();
   }

  signUp(userObj:any){

    return this.http.post<any>(`${this.baseUrl}SignUp/Signup`,userObj);
    
  }

  logIn(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}Login/login`,loginObj);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear();
    this.route.navigate(['']);
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;

    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }

  getuserNameFromToken(){
    if(this.userPayload){
      return this.userPayload.name;
    }
  }

  getRoleFromToken(){
    if(this.userPayload){
      return this.userPayload.role;
    }
  }

}
