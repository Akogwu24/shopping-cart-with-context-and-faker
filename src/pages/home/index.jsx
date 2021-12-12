import { Flex } from '@chakra-ui/react';
import React from 'react';
import Content from '../../components/content';
import Sidebar from '../../components/sidebar';

const Home = () => {
  return (
    <Flex w='100%' h='100%'>
      <Sidebar />
      <Content />
    </Flex>
  );
};

export default Home;
