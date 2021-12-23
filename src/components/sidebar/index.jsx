import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import Rating from '../rating/Rating';
import { BsSearch } from 'react-icons/bs';
import { RiMenuUnfoldFill } from 'react-icons/ri';

const Sidebar = ({ toggle, closeSidebar }) => {
  const [radioValue, setRadioValue] = useState('1');
  const [rating, setRating] = useState(1);

  return (
    <Stack
      className={toggle ? 'sidebar active' : 'sidebar'}
      display='flex'
      flexDirection='column'
      h='100vh'
      w='250px'
      bg='primary'
      spacing='20px'
      py='20px'
      px={['25px', '20px', '25px']}
      color='gray.50'
    >
      <HStack justify='space-between'>
        <Heading color='tatiary' mb='10px'>
          Filters
        </Heading>
        <RiMenuUnfoldFill size={20} onClick={closeSidebar} />
      </HStack>
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
      <Rating
        cursor='pointer'
        rating={rating}
        handleStarRating={(index) => setRating(index + 1)}
      />
      <Box display='flex' flex={1}>
        <Button
          mt='auto'
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
