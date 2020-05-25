import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
export const actFetchProductRequest = (products) => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProduct(res.data));
        })
    }
}

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (deleteId) => {
    return (dispatch) => {
        return callApi(`products/${deleteId}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(deleteId));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

//phải có res.data thì mới dispatch action => sử dụng redux-thunk
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}