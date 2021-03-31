import { ADD_CART } from './types';

export default (state: any, action: any) => {
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
