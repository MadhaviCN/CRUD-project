export interface Product {
    addproduct: AddProducts;
}

export interface AddProducts {
    title: string;
    price: string;
    company: string;
    productdate: string;
    description: string;
}
