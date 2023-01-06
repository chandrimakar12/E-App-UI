import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/shared/auth.service';
import { LoginStoreService } from 'src/app/shared/login-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string="password";
  isText: boolean=false;
  eyeIcon: string ="fa-eye-slash";
  loginForm: FormGroup;

  constructor( private formbuilder: FormBuilder , private auth :AuthService, private loginStore : LoginStoreService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
     // roles :['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.logIn(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.auth.storeToken(res.token);
          const tokenPayload= this.auth.decodedToken();
          this.loginStore.setUserNameForStore(tokenPayload.name);
          this.loginStore.setRolForStore(tokenPayload.role);

          if(tokenPayload.role == 'user'){
            this.router.navigate(['user']);
          }
          else{
            this.router.navigate(['ae']);
          }
        },
        error:(err)=>{
          alert(err?.error)
        }
      })

    }else{
      //console.log("Invalid Form");
      ValidateForm.validateAllFields(this.loginForm);
      alert("The form is invalid");
    }
  }

}
