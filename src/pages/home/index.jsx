import { Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import Content from '../../components/content';
import Sidebar from '../../components/sidebar';

const Home = () => {
  const [isMobile] = useMediaQuery('max-width:540px');
  const [toggle, setToggle] = useState(false);

  return (
    <Flex pos='relative' w='100%' h='100%'>
      {!isMobile ? (
        <>
          <Sidebar />
          <Content />
        </>
      ) : (
        <>
          <Sidebar />
          <Content toggle={toggle} handleToggle={() => setToggle(!toggle)} />
        </>
      )}
    </Flex>
  );
};

export default Home;
