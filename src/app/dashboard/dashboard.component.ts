import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

 
  public first:string;
  public last:string;
  public mobno:number;
 

  constructor(private router:Router){}

  back(){
    this.router.navigate(['phone']);
  }

  save(){
    alert("hello");
  }

}


