import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Headbar from '../headbar/Headbar';
import SingleProduct from './SingleProduct';

const Content = () => {
  return (
    <Stack bg='gray.100' flex={1} pos='relative'>
      <Headbar />
      <Grid>
        <GridItem>
          <SingleProduct />
        </GridItem>
      </Grid>
    </Stack>
  );
};
export default Content;
