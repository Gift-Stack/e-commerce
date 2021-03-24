import React from 'react';
import { Text, Box, Image, Flex, Badge } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

export const Products = ({ product }) => {
  return (
    <Box w='100%' borderWidth='1px'>
      <Image borderRadius='md' src={product.product_avatar} />
      <Flex align='baseline' mt={2} px='2'>
        <Badge colorScheme='pink'>Plus</Badge>
        <Text
          ml={2}
          textTransform='uppercase'
          fontSize='sm'
          fontWeight='bold'
          color='pink.800'
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
        {product.product_name}
      </Text>
      <Text mt={2}>{product.product_price}</Text>
      <Flex mt={2} align='center'>
        <Box as={MdStar} color='orange.400' />
        <Text ml={1} fontSize='sm'>
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
};
