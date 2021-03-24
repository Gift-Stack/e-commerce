import React from 'react';
import { Text, Flex, Spacer, Box, Icon } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex bg='tomato' w='100%' p={3} color='white'>
      <Link to='/'>
        <Flex direction='row'>
          <Text
            bgGradient='linear(to-l, #7928CA,#FFFFFF)'
            bgClip='text'
            fontWeight='extrabold'
          >
            Lekkify
          </Text>
          <Icon as={MdGroupWork} w={8} h={8} color='white.500' />
        </Flex>
      </Link>
      <Spacer />
      <Link to='/cart'>
        <FaCartPlus />
      </Link>
    </Flex>
  );
};
