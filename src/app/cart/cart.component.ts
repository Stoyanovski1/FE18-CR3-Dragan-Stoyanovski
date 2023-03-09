import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { IProduct } from '../Iproduct';
import { contact } from '../cartC';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Array<IProduct> = []
  test = new Date();
  sum : number = 0;
  constructor(private CS: CartService){ }
  sumItems(){
    let item = 0;
    for( let j = 0; j < this.product.length; j++){
      item += this.product[j].qtty;
    }
    return item;
  }
  getTotalAmount(){
    let total = 0;
    for(let i = 0; i < this.product.length; i++){
      total += this.product[i].price;
    }
    return total;
  }
  AmountTotal(){
    for(let k = 0; k < this.product.length; k++){
      this.sum = this.getTotalAmount() * 0.8
    }
    return this.sum.toFixed(2);
  }
  

  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    lname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    address: new FormControl('',[Validators.required, Validators.minLength(4)]),
    tel: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  newContact = contact;

  create(){
    alert(`You have ordered`)
    if(this.form.valid){
      let anyName: any = this.form.value;
      this.newContact.push(anyName)
    }
  }

ngOnInit(): void {
  this.product = this.CS.getCart()
}
}