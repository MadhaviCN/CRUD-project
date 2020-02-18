import { Product } from '../models/product.model';
import { ProductAction } from '../actions/product.action';

export const LOAD_PRODUCT = 'LOUD_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function productReducer(state: Product = { addproduct: undefined }, action: ProductAction): Product {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                addproduct: action.payload
            };
        default:
            return state;
    }
}

