import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Rating from './Rating';
import millify from 'millify';
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link to="details">
        <Image src={product.image} alt={product.name} />
      </Link>
      <Text>{product.name}</Text>
      <Box display="flex" flexDirection="column">
        <span>Ksh{product.price.split('.')[0]}</span>
        {product.fastDelivery === 0 ? (
          <span>Fast Delivery</span>
        ) : (
          <span> {product.fastDelivery} Days Delivery</span>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <Rating rating={product.rating} />
        <Text>({millify(product.totalRatings)}) Ratings</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        {cart.some((p) => p.id === product.id) ? (
          <Button
            marginY="1rem"
            backgroundColor="red"
            color="white"
            onClick={() =>
              dispatch({
                type: 'REMOVE_fROM_CART',
                payload: product,
              })
            }
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            marginY="1rem"
            backgroundColor="green"
            color="white"
            disabled={!product.inStock}
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: product,
              })
            }
          >
            {product.inStock ? 'Add To cart' : 'Out of stock'}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SingleProduct;
