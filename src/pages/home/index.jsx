import { Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import Content from '../../components/content';
import Sidebar from '../../components/sidebar';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const closeSidebar = () => {
    setToggle(false);
  };
  return (
    <Flex pos='relative' w='100%' h='100%'>
      <Sidebar toggle={toggle} closeSidebar={closeSidebar} />
      <Content
        toggle={toggle}
        closeSidebar={closeSidebar}
        handleToggle={() => setToggle(!toggle)}
      />
    </Flex>
  );
};

export default Home;
