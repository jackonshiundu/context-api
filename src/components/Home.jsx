import React from 'react';
import { CartState } from '../context/Context';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <Container
      display="flex"
      flexDirection={{ sm: 'column', md: 'row' }}
      maxW="100vw"
    >
      <Box width="30%" height="30vh">
        <Filter />
      </Box>

      <Grid
        width="70%"
        templateColumns={{ sm: '1fr', md: '1fr 1fr', xl: 'repeat(3, 1fr)' }}
        placeItems="center"
        gap={6}
      >
        {products.map((product) => (
          <GridItem
            key={product.id}
            width={{ sm: '100vw', md: '30vw', xl: '20vw' }}
          >
            <SingleProduct product={product} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
