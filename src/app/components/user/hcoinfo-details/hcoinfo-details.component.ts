import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { HcoinfoServiceService } from 'src/app/shared/hcoinfo-service.service';
import { Hcoinfo } from 'src/app/shared/hcoinfo.model';
import { LoginStoreService } from 'src/app/shared/login-store.service';

@Component({
  selector: 'app-hcoinfo-details',
  templateUrl: './hcoinfo-details.component.html',
  styleUrls: ['./hcoinfo-details.component.css']
})
export class HcoinfoDetailsComponent implements OnInit {

  public userName : string ="";
  countree:any=[];
  statee:any =[];

  constructor(public hcoinfoService:HcoinfoServiceService,private auth: AuthService, private loginStore : LoginStoreService) { }

  ngOnInit() {

    this.countree=this.hcoinfoService.country();
    
    this.loginStore.getUserNameFromStore()
   .subscribe(val=>{
    const userNameFromToken = this.auth.getuserNameFromToken()
    this.userName = val || userNameFromToken
   });
   
   console.log(this.userName);

   const name= this.userName
    this.hcoinfoService.getInfoByUsername(name).subscribe(result=>{
      this.hcoinfoService.listByName=result.data;
      if(this.hcoinfoService.hcoinfoData.submittedBy==null){
        this.hcoinfoService.hcoinfoData.submittedBy=name;
      }
      if(this.hcoinfoService.hcoinfoData.status==null){
        this.hcoinfoService.hcoinfoData.status="Submitted";
      }
    });

   // console.log(this.hcoinfoService.hcoinfoData);
   
   
   console.log(this.hcoinfoService.listByName);
  }


   
  populateInfo(selectedInfo:Hcoinfo){
    console.log(selectedInfo);    
    //this.hcoinfoService.statee=this.hcoinfoService.state().filter(e => e.id.toString() == selectedInfo.country);
    //console.log(this.statee);
    this.hcoinfoService.changeMessage(selectedInfo);
    this.hcoinfoService.hcoinfoData=selectedInfo;
    this.refreshInfo();
  }

  refreshInfo(){
    this.hcoinfoService.getAllHcoinfo().subscribe(res=> {
      this.hcoinfoService.listHcoinfo = res.data;
    });
  }

  

}
