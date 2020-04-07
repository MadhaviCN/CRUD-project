import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../../core/store/models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() productList: Product;

  @Output() selectedRow = new EventEmitter();

  @Output() deleteProd = new EventEmitter();

  @Output() prodFlag = new EventEmitter();

  public lastSeen;

  constructor() { }

  ngOnInit() {
  }

  /**
   * To emit the selected row form child to parent
   *
   * param {*} row
   * memberof ListProductsComponent
   */
  editRow(row) {
    this.lastSeen = new Date(row.productdate);
    this.selectedRow = row;
  }

  /**
   * To delete the selected row form child to parent
   *
   * param {*} row
   * memberof ListProductsComponent
   */
  deleteRow(row) {
    this.deleteProd = row;
  }

  createNewProduct() {
    this.prodFlag.emit(true);
  }
}
