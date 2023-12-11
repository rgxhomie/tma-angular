import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct = new Product('', '', 0, 0);

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.product = this.productService.getProductById(id as string) as IProduct;
  }

  public navigateToProducts(): void {
    this.router.navigate(['/']);
  }
}
