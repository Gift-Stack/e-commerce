import React, { useState } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const Cart = () => {
  const [cart, setCart] = useState<object>([]);
  return (
    <Box>
      <Text fontSize='4xl' fontWeight='bold'>
        Cart
      </Text>
      {cart && (
        <Center h='130px' fontSize='3xl' fontStyle='italic' color='GrayText'>
          Cart is empty
        </Center>
      )}
    </Box>
  );
};
export default Cart;
