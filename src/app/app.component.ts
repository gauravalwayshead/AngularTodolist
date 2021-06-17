import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodolist';
  constructor(){
    setTimeout(() => {
      this.title = 'Gaurav Singh';
    }, 4000);

    
  }
}
