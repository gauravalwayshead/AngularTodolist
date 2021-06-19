import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{DataserviceService} from '../../dataservice.service'
@Component({
  selector: 'app-vocablist',
  templateUrl: './vocablist.component.html',
  styleUrls: ['./vocablist.component.css']
})
export class VocablistComponent implements OnInit {
 username:any;
 password:any;  
 getreult:any;
  constructor(public http:HttpClient,public dataservice:DataserviceService) { 
    this.dataservice.getdata('10000061','all').subscribe(data=>{
      this.getreult=data;
      //console.log(this.getreult[0].aan); 
      // this.dataservice.login().subscribe(result=>{
      //   console.log(result);
      // })
    })
  }

  ngOnInit(): void {
  }

}
