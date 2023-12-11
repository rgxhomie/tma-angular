import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct, Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  public newProduct: IProduct = new Product('', '', 0, 0);

  constructor (
    private productsService: ProductsService,
    private router: Router  
  ) {}

  public addProduct(): void {
    this.productsService.addProduct(this.newProduct);
    this.newProduct = new Product('', '', 0, 0);
    this.navigateToProducts();
  }

  public navigateToProducts(): void {
    this.router.navigate(['']);
  }
}
