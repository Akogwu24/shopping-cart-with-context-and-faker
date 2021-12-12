import {
  Box,
  Button,
  Checkbox,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import Rating from '../rating/Rating';
import { BsSearch } from 'react-icons/bs';

const Sidebar = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [isMobile] = useMediaQuery('max-width: 640px');

  return (
    <Stack
      display='flex'
      h='100vh'
      w='250px'
      bg='primary'
      spacing='20px'
      py='20px'
      px='25px'
      color='gray.50'
    >
      <Heading color='tatiary' mb='10px'>
        Filters
      </Heading>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input placeholder='search Items...' />
      </InputGroup>
      <RadioGroup defaultValue='1' value={radioValue} onChange={setRadioValue}>
        <Stack spacing='20px'>
          <Radio value='1'>Lowest Price</Radio>
          <Radio value='2'>Highest Price</Radio>
        </Stack>
      </RadioGroup>
      <Checkbox>Include Out of Stock</Checkbox>
      <Checkbox>Fast Delivery Only</Checkbox>
      <Rating />
      <Box>
        <Button
          mt='150px'
          w='100%'
          _hover={{ bg: '#553d67aa' }}
          _focus={{ boroder: 'none' }}
          size='sm'
          h='35px'
          bg='special'
        >
          Clear Filters
        </Button>
      </Box>
    </Stack>
  );
};

export default Sidebar;
