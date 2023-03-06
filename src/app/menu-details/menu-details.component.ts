import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IProduct } from '../Iproduct';
import { products } from '../products';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
product: IProduct = {} as IProduct;
id: number = 0;

constructor(private route: ActivatedRoute, private CS: CartService){

}

addToCart(){
alert(`The ${this.product.name} has been added to The Cart`)
this.CS.addToCart(this.product)
}

number: number = 0;
addToOrder(){
  this.number += 1;
}

ngOnInit(){

  this.route.params.subscribe((params: Params) => {
    this.id = +params["id"]
    this.product = products[this.id]
    console.log(this.product)
  })
}
}
// CREATE DATABASE <Slim_Store>;
// CREATE DATABASE soap_shop
// DROP DATABASE <database_name>
// USE <database_name>