import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { DEMOPRODUCTLIST } from '../Models/PRODUCTS';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit() {
    this.products=DEMOPRODUCTLIST;
  }

}
