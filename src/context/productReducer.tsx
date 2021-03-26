import { ADD_CART, SET_CART, GET_PRODUCT } from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
