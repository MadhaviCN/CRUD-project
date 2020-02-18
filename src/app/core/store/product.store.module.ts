import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AppStore } from './models/product.store.module';
import { productReducer } from './reducers/product.reducer';

export const rootReducer = {
    Product: productReducer
};

/**
 * Module for store
 *
 * export
 * class EmployeePortalStoreModule
 */
@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(rootReducer)
    ]
})
export class ProductStoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ProductStoreModule,
            providers: []
        };
    }
}
