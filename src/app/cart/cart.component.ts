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
  constructor(private CS: CartService){ }

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