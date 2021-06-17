import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
todos:Todo[];
  constructor() { 
    this.todos =[
      {
        sno:1,
        title:"First ToDoList",
        description:"This is Description",
        status:true
      },
      {
        sno:2,
        title:"Second ToDoList",
        description:"This is Description",
        status:true
      },
      {
        sno:3,
        title:"Third ToDoList",
        description:"This is Description",
        status:true
      },
      {
        sno:4,
        title:"Forth ToDoList",
        description:"This is Description",
        status:true
      },
    ]
  }

  ngOnInit(): void {
  }

}
