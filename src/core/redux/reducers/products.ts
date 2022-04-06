import { IProductsState, ProductsAction, ProductsActionTypes } from './../../types/products';

const initialState: IProductsState = {
    loading: false,
    error: false,
    products: [],
};

export default function productsReducer(
    state: IProductsState = initialState,
    action: ProductsAction,
) {
    switch (action.type) {
        case ProductsActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case ProductsActionTypes.SET_LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case ProductsActionTypes.SET_LOADING_END:
            return {
                ...state,
                loading: false,
            };
        case ProductsActionTypes.SET_SUCCESS:
            return {
                ...state,
                error: false,
            };
        case ProductsActionTypes.SET_FAILED:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
}
