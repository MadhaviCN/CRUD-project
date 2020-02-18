import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatFormFieldModule, MatInputModule,
  MatTableModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddProductComponent } from './add-product.component';
import { ListProductsComponent } from '../../shared/list-products/list-products.component';
import { FormControl, FormBuilder } from '@angular/forms';
import { ProductsService } from '../../core/services/products.service';

fdescribe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  const control = new FormControl('form-group');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent, ListProductsComponent],
      providers: [ProductsService, FormBuilder, HttpClient, HttpHandler],
      imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.buttonVal = 'Save';
    component.submitted = false;
    component.showTable = false;
    // component.productAdded = {
    //   title: 'laptop', price: '200', company: 'Sony',
    //   productdate: '26/12/2020', description: 'selling'
    // };
    component.ngOnInit();
    await fixture.whenStable();
  });

  function updateForm(title, price, company, date, description) {
    component.productForm.controls.title.setValue(title);
    component.productForm.controls.price.setValue(price);
    component.productForm.controls.company.setValue(company);
    component.productForm.controls.date.setValue(date);
    component.productForm.controls.description.setValue(description);
  }

  it('should be initialized', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should call createProductForm', () => {
    component.createProductForm();
  });

  it('should call submitForm', () => {
    component.createProductForm();
  });

  it('should call submitForm', () => {
    component.submitForm();
    updateForm('mobile', '300', 'Vivo', '02/02/2020', 'good condition');
  });

  it('should call getProducts', () => {
    component.getProducts();
  });

  it('should call updateProduct', () => {
    component.updateProduct({
      title: 'laptop', price: '200', company: 'Sony',
      productdate: '26/12/2020', description: 'selling'
    });
  });

  it('should call deleteProduct', () => {
    component.deleteProduct({
      title: 'laptop', price: '200', company: 'Sony',
      productdate: '26/12/2020', description: 'selling'
    });
  });
});
