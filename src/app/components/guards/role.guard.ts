import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { LoginStoreService } from 'src/app/shared/login-store.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  public role : string ="";

  constructor(private auth: AuthService, private route: Router, private loginStore : LoginStoreService){

  }

 
  canActivate(): boolean {
    
      this.loginStore.getRoleFromStore()
      .subscribe(val=>{
      const Roles = this.auth.getRoleFromToken()
      this.role = val || Roles;
      });
       if(this.auth.isLoggedIn() && this.role == 'ae'){
        return true;
      }else{
      
        this.route.navigate(['login']);
      alert("Navigating to this page is not allowed!");
      return false;
    }
      }

    
  }

  
  

