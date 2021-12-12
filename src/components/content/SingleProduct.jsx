import React from 'react';
import { CartState } from '../context/context';

const SingleProduct = () => {
  const { state } = CartState;

  console.log(state);
  return <div>SingleProduct SingleProduct</div>;
};

export default SingleProduct;
