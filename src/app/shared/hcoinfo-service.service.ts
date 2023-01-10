import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Hcoinfo } from './hcoinfo.model';

@Injectable({
  providedIn: 'root'
})
export class HcoinfoServiceService {

  constructor(private http:HttpClient) { }

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message:any){
    this.messageSource.next(message);
  }

  baseUrl:string='http://localhost:42578/api/HCOUserInfo/';

  listHcoinfo:Hcoinfo[]=[]; // to save Hcoinfo collection as an array
  hcoinfoData:Hcoinfo=new Hcoinfo(); // to create a single object for post call

  listApprove:Hcoinfo[]=[];
  listByName:Hcoinfo[]=[];

  statee : any=[];

  saveHcoinfo(/*hcoinfoData:Hcoinfo*/):Observable<Hcoinfo>{
    return this.http.post<Hcoinfo>(this.baseUrl+'InsertInformation', this.hcoinfoData);
  }

 /* updateHcoinfo(){
    return this.http.put( `${this.baseUrl+'UpdateInformation'}/${this.hcoinfoData.id}` ,this.hcoinfoData);
  }*/

  updateHcoinfo(){
    return this.http.put(this.baseUrl+'UpdateInformation', this.hcoinfoData);
  }

  getAllHcoinfo():Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'GetAllRecord');
  }

  getInfoByUsername(userName:any):Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'GetRecordsbyName?userName='+userName);
  }

  getInfoByStatus(status:any):Observable<any>
  {
    return this.http.get<any>(this.baseUrl+'GetRecordsbyStatus?status='+status);
  }

  country(){

    return [
      {
        id:1,
        name:"Australia"
      },
      {
        id:2,
        name:"Belgium"
      },
      {
        id:3,
        name:"Canada"
      },
      {
        id:4,
        name:"Denmark"
      },
      {
        id:5,
        name:"France"
      },
      {
        id:6,
        name:"India"
      },
      {
        id:7,
        name:"Mexico"
      },
      {
        id:8,
        name:"Norway"
      },
      {
        id:9,
        name:"Spain"
      },
      {
        id:10,
        name:"United Kingdom (UK)"
      },
      {
        id:11,
        name:"United States of America (USA)"
      }
    ]
  }

  state(){
    return [
      {
        id:1,
        name:"Queensland"
      },{
        id:1,
        name:"New South Wales"
      },{
        id:1,
        name:"Victoria"
      },{
        id:1,
        name:"Tasmania"
      },
      {
        id:2,
        name:"Brussels"
      },{
        id:2,
        name:"Antwerp"
      },{
        id:2,
        name:"Bruges"
      },{
        id:2,
        name:"Ghent"
      },
      {
        id:3,
        name:"Toronto"
      },{
        id:3,
        name:"Ottawa"
      },{
        id:3,
        name:"Vancouver"
      },{
        id:3,
        name:"Windsor"
      },
      {
        id:4,
        name:"Copenhagen"
      },{
        id:4,
        name:"Odense"
      },{
        id:4,
        name:"Kolding"
      },{
        id:4,
        name:"Horsens"
      },
      {
        id:5,
        name:"Paris"
      },{
        id:5,
        name:"Toulouse"
      },{
        id:5,
        name:"Cannes"
      },{
        id:5,
        name:"Bordeaux"
      },
      {
        id:6,
        name:"West Bengal"
      },{
        id:6,
        name:"Karnataka"
      },{
        id:6,
        name:"Delhi"
      },{
        id:6,
        name:"Maharashtra"
      },
      {
        id:7,
        name:"Mexico City"
      },{
        id:7,
        name:"Veracruz"
      },{
        id:7,
        name:"Puebla"
      },{
        id:7,
        name:"Nuevo Leon"
      },
      {
        id:8,
        name:"Northern Norway"
      },{
        id:8,
        name:"Western Norway"
      },{
        id:8,
        name:"Southern Norway"
      },{
        id:8,
        name:"Eastern Norway"
      },
      {
        id:9,
        name:"Barcelona"
      },{
        id:9,
        name:"Valencia"
      },{
        id:9,
        name:"Madrid"
      },{
        id:9,
        name:"Las Palmas"
      },
      {
        id:10,
        name:"England"
      },{
        id:10,
        name:"Scotland"
      },{
        id:10,
        name:"Wales"
      },{
        id:10,
        name:"Northern Ireland"
      },
      {
        id:11,
        name:"California"
      },{
        id:11,
        name:"Texas"
      },{
        id:11,
        name:"Florida"
      },{
        id:11,
        name:"New York"
      }
    ]
  }

}
