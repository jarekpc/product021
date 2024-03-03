import { Component, OnInit, Host, Optional } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../products.service';
import { FavoritesService } from '../favorites.service';
import { favoritesFactory } from '../favorities';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [
    {provide: ProductsService, useFactory: favoritesFactory(true)}
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
