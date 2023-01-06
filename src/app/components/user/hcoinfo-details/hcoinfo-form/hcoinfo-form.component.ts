import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';


import { HcoinfoServiceService } from 'src/app/shared/hcoinfo-service.service';
import { Hcoinfo } from 'src/app/shared/hcoinfo.model';
import { LoginStoreService } from 'src/app/shared/login-store.service';

@Component({
  selector: 'app-hcoinfo-form',
  templateUrl: './hcoinfo-form.component.html',
  styleUrls: ['./hcoinfo-form.component.css']
})
export class HcoinfoFormComponent implements OnInit {
  hcoInfo:any;
  countree:any=[];
    statee:any =[];
    public userName : string ="";
    
  constructor(public hcoinfoService : HcoinfoServiceService,private auth: AuthService, private loginStore : LoginStoreService) { }

  

  ngOnInit() {
    this.hcoinfoService.currentMessage.subscribe(message => {
      console.log("Event triggered from subject");
      if(message){

        this.hcoInfo=message;
        this.statee=this.hcoinfoService.state().filter(e => e.id == message['country']);
        this.hcoinfoService.hcoinfoData.state = message['state'];

        console.log(this.hcoinfoService.hcoinfoData.state);
      }   

    
    }
      );
    this.countree=this.hcoinfoService.country();

    this.loginStore.getUserNameFromStore()
   .subscribe(val=>{
    const userNameFromToken = this.auth.getuserNameFromToken()
    this.userName = val || userNameFromToken
   });
    //console.log(this.country);
  }

  onSelect(country:any){
    //console.log(country.target.value);
    this.statee=this.hcoinfoService.state().filter(e => e.id == country.target.value);
    //console.log(this.state);

  }  

  onCountryChange(){
    console.log("Country changed");
  }

  submit(myForm:NgForm)
  {
    //console.log("Event works");
    if(this.hcoinfoService.hcoinfoData.id == 0){
      this.insertHcoinfo(myForm);
     // this.hcoinfoService.hcoinfoData.status ='Submitted';
    }else{
      this.updateHcoinfo(myForm);
     // this.hcoinfoService.hcoinfoData.status ='Submitted';
    }

  }

  insertHcoinfo(myForm:NgForm){
    this.hcoinfoService.saveHcoinfo().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshPage();
    //  this.hcoinfoService.hcoinfoData.status ='Submitted';
      console.log("Saved Successfully");
     // this.toastr.success('Success','Information saved successfully');
     alert("Information saved successfully");
    });

  }

  updateHcoinfo(myForm:NgForm){
    this.hcoinfoService.updateHcoinfo().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshInfo();
    //  this.hcoinfoService.hcoinfoData.status ='Submitted';
      console.log("Updated Successfully");
      alert("Information updated successfully");
    });
  }

  refreshInfo(){
    this.hcoinfoService.getAllHcoinfo().subscribe(res=> {
      this.hcoinfoService.listHcoinfo = res.data;
    });
  }
  refreshPage(){
    this.hcoinfoService.getInfoByUsername(this.userName).subscribe(result=>{
      this.hcoinfoService.listByName = result.data;
    });
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.hcoinfoService.hcoinfoData = new Hcoinfo();
  }

}
