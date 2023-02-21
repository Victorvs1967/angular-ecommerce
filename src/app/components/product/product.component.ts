import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  productList: Product[] = [];
  category = 'laptop';

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  addToCart(id: string) {
    this.router.navigate(['\cart']);
  }
  
}
