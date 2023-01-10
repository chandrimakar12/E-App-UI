import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { HcoinfoServiceService } from 'src/app/shared/hcoinfo-service.service';
import { Hcoinfo } from 'src/app/shared/hcoinfo.model';
import { LoginStoreService } from 'src/app/shared/login-store.service';

@Component({
  selector: 'app-ae-details',
  templateUrl: './ae-details.component.html',
  styleUrls: ['./ae-details.component.css']
})
export class AeDetailsComponent implements OnInit {

 // listApprove:Hcoinfo[]=[];
 public userName : string ="";
 
 public status :string="Submitted";

  constructor(public hcoinfoService:HcoinfoServiceService,private auth: AuthService, private loginStore : LoginStoreService) { }

  //const obj2:any = Object.assign({}, obj1);

  ngOnInit() {
  
    this.hcoinfoService.getInfoByStatus(this.status).subscribe(result=>{
      this.hcoinfoService.listApprove=result.data;
    });

    console.log(this.hcoinfoService.listApprove);
    this.loginStore.getUserNameFromStore()
   .subscribe(val=>{
    const userNameFromToken = this.auth.getuserNameFromToken()
    this.userName = val || userNameFromToken
   });
  }
  

  populateInfo(selectedInfo:Hcoinfo){
    console.log(selectedInfo);
    this.hcoinfoService.hcoinfoData=selectedInfo;
    this.refreshInfo();
  }

  refreshInfo(){
    
    this.hcoinfoService.getInfoByStatus(this.status).subscribe(res=> {
      this.hcoinfoService.listApprove = res.data;
    });
  }


}
