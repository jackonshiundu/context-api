import { Box, Container, Image, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, settotal] = useState();

  useEffect(() => {
    settotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Container display="flex" maxW="80vw" flexDirection="column">
      {cart.map((product) => (
        <Box
          width={'100%'}
          display="flex"
          alignItems="center"
          borderBottom="1px"
          borderColor="gray.300"
          justifyContent="space-between"
          padding="4px"
        >
          <Image
            src={product.image}
            alt={product.name}
            width="5rem"
            height="5rem"
            rounded="md"
          />
          <span>{product.name}</span>
          <Box display="flex">
            <Rating rating={product.rating} />
          </Box>
          <Select
            placeholder="qty"
            width="6rem"
            value={product.qty}
            onChange={(e) =>
              dispatch({
                type: 'CHANGE_QUANTITY',
                payload: {
                  id: product.id,
                  qty: e.target.value,
                },
              })
            }
          >
            {[...Array(product.inStock).keys()].map((x) => (
              <option value={x + 1}>{x + 1}</option>
            ))}
          </Select>
          <span>Ksh.{product.price.split('.')[0]}</span>
          <AiFillDelete
            onClick={() =>
              dispatch({
                type: 'REMOVE_fROM_CART',
                payload: product,
              })
            }
          />
        </Box>
      ))}
      <Box display="flex" justifyContent="space-between">
        <span>Total for ({cart.length}) Item </span>
        <span>Ksh{total}</span>
      </Box>
    </Container>
  );
};

export default Cart;
