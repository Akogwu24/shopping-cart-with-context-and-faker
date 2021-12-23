import { Flex, HStack, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { CartState } from '../context/context';

const CartItems = ({ state }) => {
  console.log(state.cart, 'cndqpcnd');

  return (
    <Stack
      pos='absolute'
      zIndex='100'
      bg='red'
      p={2}
      top='50px'
      right='5%'
      color='#fff'
    >
      {state?.cart.length > 0 ? (
        <>
          {state?.cart.map((item) => (
            <HStack bg='teal'>
              <Img
                src={item.image}
                alt={item.name}
                w='50px'
                objectFit='cover'
                h='50px'
                borderRadius='50%'
              />
              <Text>
                {item.name} <br /> NGN {item.price.split('.')[0]}
              </Text>
            </HStack>
          ))}
        </>
      ) : (
        <Text>Your Cart is Empty</Text>
      )}
    </Stack>
  );
};

export default CartItems;
