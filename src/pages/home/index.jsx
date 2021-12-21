import { Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import Content from '../../components/content';
import Sidebar from '../../components/sidebar';

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width:980px)');
  const [toggle, setToggle] = useState(false);
  console.log('toggle', toggle);
  return (
    <Flex pos='relative' w='100%' h='100%'>
      <Sidebar
        toggle={toggle}
        isMobile={isMobile}
        closeSidebar={() => setToggle(false)}
      />
      <Content toggle={toggle} handleToggle={() => setToggle(!toggle)} />
    </Flex>
  );
};

export default Home;
