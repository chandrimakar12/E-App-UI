import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string="password";
  isText: boolean=false;
  eyeIcon: string ="fa-eye-slash";
  signupForm:FormGroup;

  constructor( private formbuilder:FormBuilder, private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      roles: ['',Validators.required]
    })
  }

  onSignup(){
    if(this.signupForm.valid){
      //console.log(this.signupForm.value);
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.signupForm.reset();
          this.router.navigate(['login']);
        }),
        error:(err=>{
          alert(err?.error.message)
        })
      })

    }else{
      //console.log("Invalid Form");
      ValidateForm.validateAllFields(this.signupForm);
      alert("The form is invalid");
    }
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }

}
