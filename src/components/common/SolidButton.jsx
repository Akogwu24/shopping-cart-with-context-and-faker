import { Button } from '@chakra-ui/react';
import React from 'react';

const SolidButton = ({ text, bg, ...props }) => {
  return (
    <Button
      bg={bg || 'special'}
      size='sm'
      color='#fff'
      //   _hover={{ bg: 'unique' }}
      _focus={{ border: 'none', outline: 'none' }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default SolidButton;
