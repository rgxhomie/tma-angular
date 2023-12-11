import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { TagCreateFormComponent } from './tags/tag-create-form/tag-create-form.component';
import { TagManagementComponent } from './tags/tag-management/tag-management.component';

export const routes: Routes = [
    {
        title: 'products',
        path: '',
        component: ProductListComponent
    },
    {
        title: 'create',
        path: 'create',
        component: ProductFormComponent
    },
    {
        title: 'details',
        path: 'details/:id',
        component: ProductDetailComponent
    },
    {
        title: 'create tag',
        path: 'create/tag',
        component: TagCreateFormComponent
    },
    {
        title: 'manage tags',
        path: 'manage/tags',
        component: TagManagementComponent
    }
];
