import { IProduct } from './../models/product.model';

export interface IProductsState {
    loading: boolean;
    error: boolean | string;
    products: IProduct[];
}

export enum ProductsActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_LOADING_START = 'SET_LOADING_START',
    SET_LOADING_END = 'SET_LOADING_END',
    SET_SUCCESS = 'SET_SUCCESS',
    SET_FAILED = 'SET_FAILED',
}

interface fetchProducts {
    type: ProductsActionTypes.SET_PRODUCTS;
    payload: IProduct[];
}

interface startFetchProducts {
    type: ProductsActionTypes.SET_LOADING_START;
}

interface endFetchProducts {
    type: ProductsActionTypes.SET_LOADING_END;
}

interface setSuccessProducts {
    type: ProductsActionTypes.SET_SUCCESS;
}

interface setFailedProducts {
    type: ProductsActionTypes.SET_FAILED;
    error: boolean | string;
}

export type ProductsAction =
    | fetchProducts
    | startFetchProducts
    | endFetchProducts
    | setSuccessProducts
    | setFailedProducts;
