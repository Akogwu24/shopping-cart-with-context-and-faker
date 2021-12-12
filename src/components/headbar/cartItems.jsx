import { Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const CartItems = () => {
  return (
    <Flex
      pos='absolute'
      zIndex='100'
      bg='red'
      top='50px'
      right='30px'
      color='#fff'
    >
      <HStack bg='teal'>
        <Text>fvunwlkf</Text>
      </HStack>
    </Flex>
  );
};

export default CartItems;
