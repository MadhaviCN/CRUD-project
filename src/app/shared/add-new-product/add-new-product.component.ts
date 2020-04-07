import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/store/models/product.model';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  public productForm: FormGroup;

  public submitted = false;

  public productAdded: Product;

  public showTable = false;

  public buttonVal = 'Save';

  public updateId;

  constructor(private formbuilder: FormBuilder, private productsService: ProductsService) { }

  ngOnInit() {
    this.createProductForm();
    this.getProducts();
  }

  newProductAdded(event) {
    console.log('event', event);
  }
  /**
   * To create form
   *
   * memberof AddProductComponent
   */
  createProductForm() {
    this.productForm = this.formbuilder.group({
      device_id: ['', Validators.required],
      device_type: [''],
      device_risk: ['', Validators.required],
      productdate: ['', Validators.required]
    });
  }

  /**
   * to save the products
   *
   * memberof AddProductComponent
   */
  submitForm() {
    if (this.productForm.valid) {
      this.submitted = true;
      this.showTable = true;
      this.productForm.value.mode = this.buttonVal;
      this.productForm.value.id = this.updateId;
      this.productsService.addProducts(this.productForm.value).subscribe(() => {
        this.getProducts();
      });
    }
    this.productForm.reset();
    this.buttonVal = 'Save';
  }

  /**
   * Adding controls
   *
   * readonly
   * memberof AddProductComponent
   */
  get formValue() {
    return this.productForm.controls;
  }

  /**
   * To get the products from DB
   *
   * memberof AddProductComponent
   */
  getProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.productAdded = data.addproduct;
    }, (error) => {
      console.log(error);
    });
    // this.newProductAdded(event);
  }

  /**
   * To update the products in DB
   *
   * param {*} event
   * memberof AddProductComponent
   */
  updateProduct(event) {
    this.productForm.patchValue(event);
    this.buttonVal = 'Update';
    this.updateId = event._id;
  }

  /**
   * To delete the products
   *
   * param {*} event
   * memberof AddProductComponent
   */
  deleteProduct(event) {
    this.productsService.deleteProducts(event).subscribe(() => {
      this.getProducts();
    }, (error) => {
      console.log(error);
    });
  }

}
