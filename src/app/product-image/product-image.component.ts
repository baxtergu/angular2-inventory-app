import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  host: {class: 'ui small image'},
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}