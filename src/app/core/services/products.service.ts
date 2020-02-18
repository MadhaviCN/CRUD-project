import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../store/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: {
    addproduct: Product;
  };

  constructor(private httpclient: HttpClient) { }

  /**
   * Service to add the products in to DB
   *
   * param {*} prods
   * returns
   * memberof ProductsService
   */
  public addProducts(prods) {
    return this.httpclient.post('http://localhost:8080/api/addProducts', prods)
      .pipe(
        map((res: Product) => {
          console.log(res);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  /**
   * Service to get the products from DB
   *
   * returns
   * memberof ProductsService
   */
  public getProducts() {
    return this.httpclient.get('http://localhost:8080/api/getProducts')
      .pipe(
        map((res: Product) => this.product = {
          addproduct: res
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  /**
   * Service to delete product from DB
   *
   * param {*} row
   * returns
   * memberof ProductsService
   */
  public deleteProducts(row) {
    return this.httpclient.post('http://localhost:8080/api/deleteProduct', row)
      .pipe(
        map((res) => {
          console.log(res);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
