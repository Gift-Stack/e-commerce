import React from 'react';
import { Text, Grid, Box, useMediaQuery } from '@chakra-ui/react';
import products from '../../products.json';
import { Products } from './Products';

export const Body = () => {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  return (
    <Box w='100%'>
      <Text fontSize='4xl' fontWeight='bold'>
        Our Products
      </Text>
      <Box p='4'>
        <Grid
          templateColumns={`repeat(${isSmallerThan700 ? 2 : 3},1fr)`}
          gap={6}
        >
          {products.map((product) => (
            <Products product={product} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
