import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
 @Input() pro: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
