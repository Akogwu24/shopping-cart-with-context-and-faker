import { Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Headbar from '../headbar/Headbar';
import SingleProduct from './SingleProduct';
import { CartState } from '../context/context';

const Content = ({ handleToggle }) => {
  const { state } = CartState();
  console.log('state', state);

  return (
    <Stack bg='gray.100' flex={1} pos='relative'>
      <Headbar handleToggle={handleToggle} />
      <Grid
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
      >
        {state.products.map((product) => (
          <GridItem justifySelf={'center'} key={product?.id}>
            <SingleProduct product={product} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};
export default Content;
