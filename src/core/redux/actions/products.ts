import { ProductsAction, ProductsActionTypes } from './../../types/products';
import { Dispatch } from 'react';
import { constants } from '../../constants';

export default function fetchProducts() {
    return function (dispatch: Dispatch<ProductsAction>) {
        dispatch({ type: ProductsActionTypes.SET_LOADING_START });

        fetch(`${constants.api_url}/products`)
            .then((data) => data.json())
            .then((data) => {
                dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload: data.data.products });
                dispatch({ type: ProductsActionTypes.SET_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: ProductsActionTypes.SET_FAILED, error: true });
            })
            .finally(() => {
                dispatch({ type: ProductsActionTypes.SET_LOADING_END });
            });
    };
}
