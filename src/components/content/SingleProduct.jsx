import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Rating from '../rating/Rating';

const SingleProduct = ({ product }) => {
  return (
    <Box m={5} p='6px' bg='#fff' borderRadius='5px' w='230px'>
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
            <Button bg='unique' size='sm' color='#fff'>
              {'ADD TO CART'}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleProduct;
