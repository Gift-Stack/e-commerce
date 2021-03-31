import React from 'react';
import { Text, Flex, Spacer, Icon } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex bg='white' w='100%' p={5} borderBottomWidth={2}>
      <Link to='/'>
        <Flex direction='row'>
          <Text
            color='#FF5A5F'
            // bgGradient='linear(to-l, pink,#FFFFFF)'
            // bgClip='text'
            fontWeight='extrabold'
          >
            ST
            <Icon as={MdGroupWork} w={8} h={8} pt={0} color='#FF5A5F' />
            RE
          </Text>
        </Flex>
      </Link>
      <Spacer />
      <Link to='/cart'>
        <FaCartPlus color='#FF5A5F' />
      </Link>
    </Flex>
  );
};
