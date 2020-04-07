import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  MatFormFieldModule, MatInputModule,
  MatTableModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './shared/list-products/list-products.component';
import { ProductsService } from './core/services/products.service';
import { AddNewProductComponent } from './shared/add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductsComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({})
  ],
  providers: [Store, ProductsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
