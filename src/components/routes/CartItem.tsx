import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

export const CartItem = ({ item }: any) => {
  return <Box> {item.product_name} </Box>;
};
