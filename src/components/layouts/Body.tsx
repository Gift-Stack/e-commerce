import React from 'react';
import { Text, Grid, Box, useMediaQuery } from '@chakra-ui/react';
import products from '../../products.json';
import { Products } from './Products';

export const Body = () => {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const [isSmallerThan482] = useMediaQuery('(max-width: 482px)');
  return (
    <Box maxW='100%'>
      <Text fontSize='4xl' fontWeight='semibold' textAlign='left' pl={5}>
        Our Products
      </Text>
      <Box p='4'>
        <Grid
          templateColumns={`repeat(${
            isSmallerThan482 ? 1 : isSmallerThan700 ? 2 : 3
          } ,1fr)`}
          gap={6}
        >
          {products.map((product) => (
            <Products key={product.product_id} product={product} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
