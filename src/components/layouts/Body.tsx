import React from 'react';
import { Text, Grid, Box } from '@chakra-ui/react';
import products from '../../products.json';
import { Products } from './Products';

export const Body = () => {
  return (
    <Box>
      <Text fontSize='4xl' fontWeight='bold'>
        Our Products
      </Text>
      <Box p='4'>
        <Grid templateColumns='repeat(3,1fr)' gap={6}>
          {products.map((product) => (
            <Products product={product} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
