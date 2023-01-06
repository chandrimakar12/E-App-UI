import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HcoinfoServiceService } from 'src/app/shared/hcoinfo-service.service';
import { Hcoinfo } from 'src/app/shared/hcoinfo.model';

@Component({
  selector: 'app-ae-form',
  templateUrl: './ae-form.component.html',
  styleUrls: ['./ae-form.component.css']
})
export class AeFormComponent implements OnInit {
  countree:any=[];
    statee:any =[];

  constructor(public hcoinfoService : HcoinfoServiceService) { }

  ngOnInit() {
    this.countree=this.hcoinfoService.country();
  }

  submit(myForm:NgForm)
  {
    //console.log("Event works");
    if(this.hcoinfoService.hcoinfoData.id == 0){
      this.insertHcoinfo(myForm);
    }else{
      this.updateHcoinfo(myForm);
    }

  }

  insertHcoinfo(myForm:NgForm){
    this.hcoinfoService.saveHcoinfo().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshInfo();
      console.log("Saved Successfully");
    });

  }

  updateHcoinfo(myForm:NgForm){
    this.hcoinfoService.updateHcoinfo().subscribe(d=> {
      this.resetForm(myForm);
      this.refreshInfo();
      console.log("Updated Successfully");
      alert("Status updated successfully");
    });
  }

  refreshInfo(){
    this.hcoinfoService.getAllHcoinfo().subscribe(res=> {
      this.hcoinfoService.listHcoinfo = res.data;
    });
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.hcoinfoService.hcoinfoData = new Hcoinfo();
  }

  onChange(e:any){
    this.hcoinfoService.hcoinfoData.status = e.target.value;
  }


}
