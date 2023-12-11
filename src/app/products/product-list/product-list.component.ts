import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { IProduct, Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TagComponent } from "../../tags/tag/tag.component";
import { ITag, Tag } from '../../tags/tag.model';
import { TagsService } from '../../services/tags.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [
        ProductDetailComponent,
        ProductFormComponent,
        CommonModule,
        TagComponent
    ]
})
export class ProductListComponent implements OnInit{
  public products$: Observable<IProduct[]> = this.productsService.products$;
  public tags$: Observable<ITag[]> = this.tagService.tags$;
  public selectedProduct: IProduct | undefined;

  constructor (
    private productsService: ProductsService,
    private tagService: TagsService,
    private router: Router  
  ) {}

  public ngOnInit(): void {
    this.productsService.setProducts([
      new Product('iPhone', 'A mobile device', 999, 10000, [new Tag('test', 'green')]),
      new Product('Samsung', 'A microwave oven', 600, 300, [new Tag('else', 'red')])
    ])
  }

  public navigateTo(product: IProduct): void {
    this.router.navigate(['details', product.id])
  }

  public navigateToCreate(): void {
    this.router.navigate(['create']);
  }

  public navigateToTagMgmt(): void {
    this.router.navigate(['manage/tags']);
  }

  public removeProduct(id: string): void {
    this.productsService.removeProductById(id);
  }
}
