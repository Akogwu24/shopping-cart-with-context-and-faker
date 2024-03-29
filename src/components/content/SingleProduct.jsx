import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import SolidButton from '../common/SolidButton';
import { CartState } from '../context/context';
import Rating from '../rating/Rating';

const SingleProduct = ({ product }) => {
  const { state, dispatch } = CartState();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <Box m={4} p='6px' bg='#fff' borderRadius='5px' w='230px'>
      <Box bg='gray.50' p={2} borderRadius='5px'>
        <Stack spacing={4}>
          <Image
            shadow='lg'
            borderRadius='4px'
            src={product.image}
            alt={product.name}
          />
          <Stack spacing='4px'>
            <Text fontWeight='700'>{product.name}</Text>
            <Text fontWeight='500'>NGN {product.price.split('.')[0]}</Text>
            <Text fontSize='0.8rem'>
              {`${product.description.substring(0, 50)}...`}
            </Text>
            <Rating rating={product.ratings} noClick fontSize='0.9rem' />

            {state?.cart.some((cartItem) => cartItem.id === product.id) ? (
              <SolidButton
                bg='tartiary'
                _hover={{ opacity: 0.8 }}
                text='Remove from Cart'
                onClick={removeFromCart}
              />
            ) : (
              <SolidButton
                _hover={{ bg: product.inStock ? 'unique' : '' }}
                isDisabled={!product.inStock}
                onClick={addToCart}
                text={!product.inStock ? 'Out of Stock' : 'Add to Cart'}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleProduct;
