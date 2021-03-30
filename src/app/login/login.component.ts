import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string;
  password:string;
  public c1:boolean;

  constructor(private router:Router){}

  login(){

    if(this.username == 'Tanmay' && this.password == '123'){
      sessionStorage.setItem('loggedInUser',this.username);
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Invalid username/ password")
    }
  }

}
