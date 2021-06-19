import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
url:any;
options:any;
  constructor(public http:HttpClient) { 
    this.url="http://localhost/restapirsaproject/api/";
  }

  getdata(userid:any,type:any){
    //console.log(userid);
   return this.http.get(this.url+'search?type='+type+'&userid='+userid+'');
  }

  login(userid:any,password:any){
    this.options = {
      'userid' : userid ,
      'password' :password
    }
    return this.http.post(this.url+'login',this.options);
  }
}
