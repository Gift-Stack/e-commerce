import React, { useReducer } from 'react';
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import products from '../products.json';
import { ADD_CART, CLEAR_CART, DELETE_PRODUCT } from './types';

const ProductState = (props: any) => {
  const initialState = {
    cart: [],
    products,
    product: {},
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Get Product

  // Add Cart
  const addCart = async (id: number) => {
    const data = products;
    const actualData = data.filter((prev) => prev.product_id === id);

    dispatch({
      type: ADD_CART,
      payload: actualData,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        cart: state.cart,
        products: state.products,
        product: state.product,
        addCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
