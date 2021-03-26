import React, { createContext, useState } from 'react';
import products from '../src/products.json';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsData] = useState(products);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value='hello from context'>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
