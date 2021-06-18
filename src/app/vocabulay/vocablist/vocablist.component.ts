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
  constructor(public http:HttpClient,public dataservice:DataserviceService) { 
    this.dataservice.getdata().subscribe(data=>{
       
    })
  }

  ngOnInit(): void {
  }

}
