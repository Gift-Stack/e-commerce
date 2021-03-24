import React from 'react';
import {
  Text,
  Box,
  Image,
  Flex,
  Badge,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Grid,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';

export const Products = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w='100%' borderWidth='1px'>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.product_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid></Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Continue shopping
            </Button>
            <Button variant='ghost'>Checkout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
          Verified &bull;
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
        <Spacer />
        <Button
          leftIcon={<MdAddShoppingCart />}
          colorScheme='pink'
          variant='solid'
          onClick={onOpen}
        >
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
};
