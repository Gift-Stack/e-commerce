import React, { useContext, useState } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import ProductContext from '../../context/productContext';

const Cart = () => {
  const productContext = useContext(ProductContext);
  const cart = productContext.cart;
  console.log(cart);
  return (
    <Box>
      <Text fontSize='4xl' fontWeight='bold'>
        Cart
      </Text>
      {cart.length === 0 && (
        <Center h='130px' fontSize='3xl' fontStyle='italic' color='GrayText'>
          Cart is empty
        </Center>
      )}
      {cart.map((cur) => cur.map((nxt) => <Text>{nxt.product_name}</Text>))}
    </Box>
  );
};
export default Cart;
