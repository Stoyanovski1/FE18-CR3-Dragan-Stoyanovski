import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Iproduct';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  product: IProduct = {} as IProduct;


  ngOnInit(): void {
    
  }
}