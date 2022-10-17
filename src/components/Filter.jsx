import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import Rating from './Rating';
import { CartState } from '../context/Context';
const Filter = () => {
  const {
    filterState: { byStock, sort, byFastDelivery, byRating, searchQuery },
    filterDispatch,
  } = CartState();
  return (
    <Box display="flex" flexDirection={{ md: 'column' }} gap="1rem">
      <Heading>Filter Products</Heading>
      <RadioGroup defaultValue="1">
        <Stack>
          <Radio
            value="2"
            onChange={() =>
              filterDispatch({
                type: 'SORT_BY_PRICE',
                payload: 'lowToHigh',
              })
            }
            checked={sort === 'loToHigh' ? true : false}
          >
            Ascending
          </Radio>
          <Radio
            value="3"
            onChange={() =>
              filterDispatch({
                type: 'SORT_BY_PRICE',
                payload: 'highToLow',
              })
            }
            checked={sort === 'highToLow' ? true : false}
          >
            Descending
          </Radio>
        </Stack>
      </RadioGroup>
      <Checkbox
        onClick={() =>
          filterDispatch({
            type: 'FILTER_BY_STOCK',
          })
        }
        checked={byStock}
      >
        Include Out of Stock
      </Checkbox>
      <Checkbox
        onClick={() =>
          filterDispatch({
            type: 'FILTER_BY_DELIVERY',
          })
        }
        checked={byFastDelivery}
      >
        Fast Delivery only
      </Checkbox>

      <Box display="flex" alignItems="center">
        <Text marginRight="3px">Rating:</Text>
        <Rating
          rating={byRating}
          onClick={(i) =>
            filterDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            })
          }
          cursor="pointer"
        />
      </Box>
      <Button
        backgroundColor="maroon"
        color="white"
        onClick={() =>
          filterDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filter
      </Button>
    </Box>
  );
};

export default Filter;
