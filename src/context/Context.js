import React, { createContext, useReducer, useContext } from 'react';
import faker from 'faker';
import { filterReducer, reducer } from './Reducers';

const Cartt = createContext('');
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 6, 6, 7, 8, 10, 20, 4]),
    fastDelivery: faker.random.arrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    product: faker.commerce.product(),
    totalRatings: faker.random.arrayElement([
      100, 1000, 5000, 10000, 4, 150, 11, 1729.384709, 24736, 3465,
    ]),
  }));
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: [],
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  });
  return (
    <Cartt.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cartt.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cartt);
};
