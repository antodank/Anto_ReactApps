import * as actionTypes from "../constants/actiontypes";

const initialState = {
  productData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_PRODUCTS:
      return {
        ...state,
        coffeeData: action.productData,
      };
    default:
      return state;
  }
};

export default reducer;
