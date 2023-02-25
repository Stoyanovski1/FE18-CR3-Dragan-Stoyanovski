import { Injectable } from '@angular/core';
import { IProduct } from './Iproduct';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Array<IProduct> = [];
  constructor() { }

  addToCart(x: IProduct){
    this.product.push(x)
  }

  getCart(){
    return this.product
  }

  clearCart(){
    this.product = []
    return this.product
  }

}