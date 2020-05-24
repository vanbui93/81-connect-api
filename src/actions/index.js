import * as Types from './../constants/ActionTypes';

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}