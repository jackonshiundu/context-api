import React from 'react';
import {
  Badge,
  Box,
  Button,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillCaretDownFill, BsCart4 } from 'react-icons/bs';
import { CartState } from '../context/Context';
const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Box
      display="flex"
      backgroundColor="maroon"
      justifyContent={{ sm: 'space-between', md: 'space-evenly' }}
      padding="16px"
      alignItems="center"
    >
      <Text color="white">
        <Link to="/">Shopify</Link>
      </Text>
      <Input
        placeholder="Filter by searching"
        width={{ sm: '50%', md: '30%' }}
        color="white"
      />
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsFillCaretDownFill />}
          position="relative"
        >
          <BsCart4 />
          <Badge colorScheme="green" position="absolute" top="3px" left="30px">
            {cart.length}
          </Badge>
        </MenuButton>
        <MenuList>
          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <MenuItem
                  key={product.id}
                  display="flex"
                  justifyContent="space-between"
                  gap="1rem"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width="mrem"
                    height="3rem"
                    rounded="md"
                  />
                  <Box>
                    <span>{product.name}</span>
                    <span>Ksh.{product.price.split('.')[0]}</span>
                  </Box>
                  <AiFillDelete
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_fROM_CART',
                        payload: product,
                      })
                    }
                  />
                </MenuItem>
              ))}
              <MenuItem display="flex" justifyContent="space-between">
                <span>Total</span>
                <span>
                  Ksh.
                  {cart.reduce((c, curr) => c + Number(curr.price), 0)}
                </span>
              </MenuItem>
              <Link to="/cart">
                <Button
                  marginLeft="10px"
                  backgroundColor="maroon"
                  padding="-10"
                  width="90%"
                  color="white"
                >
                  Got To Cart
                </Button>
              </Link>
            </>
          ) : (
            <MenuItem>No Item</MenuItem>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
