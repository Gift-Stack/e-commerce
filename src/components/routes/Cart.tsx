import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Box, Text, Center } from '@chakra-ui/react';
import ProductContext from '../../context/productContext';
import { CartItem } from './CartItem';

const Cart = () => {
  const productContext: any = useContext(ProductContext);
  const cart = productContext.cart;
  return (
    <Box>
      <Text fontSize='4xl' textAlign='left' p={5} fontWeight='bold'>
        Shopping Cart
      </Text>
      {cart.length === 0 && (
        <React.Fragment>
          <Center fontSize='3xl' fontStyle='italic' color='GrayText'>
            <Text>Cart is empty</Text>
            <br />
          </Center>
          <Link
            to='/'
            style={{ color: '#FF5A5F', textDecoration: 'underline' }}
          >
            Back to store
          </Link>
        </React.Fragment>
      )}
      <Box>
        {cart.map((cur: any) =>
          cur.map((curItem: any): object => (
            <CartItem key={curItem.product_id} item={curItem} />
          ))
        )}
      </Box>
    </Box>
  );
};
export default Cart;
