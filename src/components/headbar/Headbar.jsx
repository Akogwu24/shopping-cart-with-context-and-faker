import { Badge, Box, Flex, HStack, Square, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import CartItems from './cartItems';
import { CartState } from '../context/context';

const Headbar = ({ handleToggle, closeSidebar }) => {
  const { state } = CartState();
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    closeSidebar();
    setCartOpen(!cartOpen);
  };

  return (
    <Flex
      className='mobile-nav'
      pos='sticky'
      top={0}
      zIndex={10}
      justify='space-between'
      align='center'
      bg='#fff'
      p={4}
      w='100%'
      color='gray.700'
    >
      <HStack spacing={5}>
        <RiMenuUnfoldFill size={20} cursor='pointer' onClick={handleToggle} />
        <Text fontWeight='700'>Home</Text>
      </HStack>
      <Square
        onClick={handleCartOpen}
        borderRadius='5px'
        bg='unique'
        py='5px'
        px='10px'
        mr={[4, 5, 8]}
        color='#fff'
        cursor='pointer'
      >
        <Text fontWeight='500' s>
          Cart
        </Text>
        <Badge mx='5px'>{state?.cart.length}</Badge>
        {cartOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </Square>
      {cartOpen && <CartItems state={state} />}
    </Flex>
  );
};

export default Headbar;
