import { Badge, Box, Flex, HStack, Square, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import CartItems from './cartItems';
import { CartState } from '../context/context';

const Headbar = ({ handleToggle }) => {
  const [cartOpen, setCartOpen] = useState(false);

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
        onClick={() => setCartOpen(!cartOpen)}
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
        <Badge mx='5px'>10</Badge>
        {cartOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </Square>
      {cartOpen && <CartItems />}
    </Flex>
  );
};

export default Headbar;
