import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit  {

  constructor(private router:Router) {}

  first:string;
  last:string;
  mobNo:any;

  

  ngOnInit(): void {

    this.first =sessionStorage.getItem("firstname");
    this.last = sessionStorage.getItem("lastname");
    this.mobNo = sessionStorage.getItem("mobilenumber");
  }

  add(){
    this.router.navigate(['dashboard']);
  }

}

export class ContactList{
  
}
