import * as Types from './../constants/ActionTypes';
var oldState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id = id) {
            result = index;
        }
    });
    return result;
}
const products = (state = oldState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCTS:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        default:
            return [...state];
    }
}

export default products;