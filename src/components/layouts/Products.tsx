import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
import ProductContext from '../../../src/context/productContext';

export const Products = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { addCart } = productContext;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddToCart = () => {
    if (product.inCart === false) {
      addCart(product.product_id);
      onOpen();
    }
  };

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
            <Link to='/cart'>
              <Button variant='ghost'>Checkout</Button>
            </Link>
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
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
};
