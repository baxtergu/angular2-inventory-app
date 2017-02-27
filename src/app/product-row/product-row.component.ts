import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  host: { class: 'item' },
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }
}