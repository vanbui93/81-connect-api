import * as Types from './../constants/ActionTypes';


var initialState = [];

const itemEditing = (state=initialState,action) => {
  switch (action.type) {
    case Types.GET_ITEM_EDIT:
      console.log(action.product);
      return action.product               //lưu product {} edit lên store
      
    default:
      return [...state];
  }
}

export default itemEditing;