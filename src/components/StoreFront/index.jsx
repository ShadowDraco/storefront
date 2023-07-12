import React from 'react';

import Products from '../Products';
import Categories from '../Categories';

import { Container } from '@mui/material';

import Cart from '../Cart';

export default function StoreFront({ testProducts, testCategories }) {
  return (
    <Container>
      <Cart />
      <Categories testCategories={testCategories} />
      <Products testProducts={testProducts} />
    </Container>
  );
}
