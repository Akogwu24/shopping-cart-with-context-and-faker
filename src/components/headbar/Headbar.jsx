import { Badge, Box, Flex, HStack, Square, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import CartItems from './cartItems';

const Headbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Flex
      pos='relative'
      justify='space-between'
      align='center'
      bg='#fff'
      p={3}
      color='gray.700'
    >
      <HStack spacing={5}>
        <RiMenuUnfoldFill size={20} />
        <Text fontWeight='700'>Home</Text>
      </HStack>
      <Square
        onClick={() => setCartOpen(!cartOpen)}
        borderRadius='5px'
        bg='unique'
        py='5px'
        px='10px'
        mr={[5]}
        color='#fff'
        cursor='pointer'
      >
        <Text fontWeight={'500'}>Cart</Text>
        <Badge mx='5px'>10</Badge>
        {cartOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </Square>
      {cartOpen && <CartItems />}
    </Flex>
  );
};

export default Headbar;
