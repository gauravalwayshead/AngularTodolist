import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
url:any;
  constructor(public http:HttpClient) { }

  getdata(){
   return this.http.get(this.url);
  }
}
