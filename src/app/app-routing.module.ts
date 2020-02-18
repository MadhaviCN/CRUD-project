import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: AddProductComponent }
  // { path: 'product-list', loadChildren: '../../shared/list-products/list-products.module#ListProductsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
