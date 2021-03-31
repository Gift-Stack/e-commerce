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
  useMediaQuery,
  Container,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductContext from '../../../src/context/productContext';

export const Products = ({ product }) => {
  const [isSmallerThan482] = useMediaQuery('(max-width: 482px)');

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
    <Box w='100%' borderWidth='1px' borderRadius='lg'>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.product_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={`repeat(${isSmallerThan482 ? 1 : 2} ,1fr)`}
              gap={6}
            >
              <Container maxW='xl' centerContent>
                <Box padding='4' bg='gray.100' maxW='3xl'>
                  There are many benefits to a joint design and development
                  system. Not only does it bring benefits to the design team.
                </Box>
              </Container>
            </Grid>
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

      <Image borderRadius='lg' src={product.product_avatar} />
      <Box>
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
    </Box>
  );
};
