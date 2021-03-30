import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private http:HttpClient) { }

  product:Product = new Product();
  
  add(){
    let url = "http://localhost:8000/rest-app/api/product";
    this.http.post(url,this.product).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

}

export class Product{
  id:number;
  name:string;
  price:number;
  quantity:number;
}


