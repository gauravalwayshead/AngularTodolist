import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{DataserviceService} from '../../dataservice.service';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 massage:string='';
 resultdata:any;
 alertmsg:string='';
  constructor(private formBuilder: FormsModule ,public http:HttpClient,public dataservice:DataserviceService ,private router: Router
) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    if(data.userid===''){
     this.alertmsg= "Data Must be Filled";
    }else if(data.password===''){
      this.alertmsg= "Data Must be Filled";
     
    }else{
      this.dataservice.login(data.userid,data.password).subscribe(result=>{
        this.resultdata=result;
        console.log( this.resultdata.result)
        if(this.resultdata.result == 1){
          this.router.navigate(['/profile']);
      //   this.massage="login successfully";
        }else{
        
          this.massage="Sorry try again";
        }
      })
    }
   // console.log(data.userid);
   // console.log(data.password);
    
  }

}
