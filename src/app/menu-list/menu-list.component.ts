import { Component, } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../Iproduct';
import { products } from '../products';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent  {
product: Array<IProduct> = products

constructor(private CS: CartService){ }

number: number = 0;
addToOrder(){
  this.number += 1;
}

  isAvailable: boolean = true;
  changeValue(valid: boolean) {
    this.isAvailable = true;
  }

addToCart(x: IProduct){
  alert(`The ${x.name} has been added to the Cart`)
  this.CS.addToCart(x)
}
}