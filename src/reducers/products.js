import * as Types from './../constants/ActionTypes';
var oldState =[];

const products = (state=oldState,action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        default:
            return [...state];
    }
}

export default products;