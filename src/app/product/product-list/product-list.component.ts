import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [{
    provide: ProductsService, useClass: ProductsService
  }]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products: Product[] = []
  private productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }
  
  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }


}
