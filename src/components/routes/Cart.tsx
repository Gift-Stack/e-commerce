import React, { useContext } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import ProductContext from '../../context/productContext';
import { CartItem } from './CartItem';

const Cart = () => {
  const productContext = useContext(ProductContext);
  const cart = productContext.cart;
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
      {cart.map((cur) =>
        cur.map((curItem) => (
          <CartItem key={curItem.product_id} item={curItem} />
        ))
      )}
    </Box>
  );
};
export default Cart;
