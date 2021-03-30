import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

export class ProductListingComponent  {
  
  public c1:boolean;
  public c2:boolean;

  check(){
    this.c1=true;
  }

  addToCart(id: number){
    console.log(id);
    var i=0;
 
   /*for(i=0; i < this.products.length; i++){
        if(this.products[i].id==id){
            console.log(this.products[i]);
            this.c2=true;
        }
    }*/
    
      for(let p of this.products){
        if(p.id==id){
          console.log(p);
          p.item=true;
        }
      }
    
  }

  

  products : Product[] = [
    new Product(111, "iphone11", "Apple iphone 11", 49000,'assets/images/iphone11.jpeg' ),
    new Product(222, "S12 Ultra", "Samsung S12 ultra", 149900,'assets/images/s12ultra.jpeg' ),
    new Product(333, "Mackbook air", "Apple Mackbook Air", 99000,'assets/images/mackbook-air.jpeg' ),
    new Product(444, "ipad pro", "Apple ipad pro", 119900,'assets/images/ipad-pro.jpeg' ),
    new Product(555, "HP Envy", "Hp Envy", 499000,'assets/images/Hp-envy.jpeg' )
  ]

}

export class Product{

  constructor( public id:number,
              public name: string,
              public description: string,
              public price: number,
              public imgUrl: string,public item:boolean = false){}
}