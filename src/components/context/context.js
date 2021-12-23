import { createContext, useReducer, useContext, useState } from 'react';
import faker from 'faker';
import { cartReducer } from './reducers';

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    product: faker.commerce.product(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 1, 2]),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
