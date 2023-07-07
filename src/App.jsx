import { useState } from 'react';
import './App.scss';

import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import ActiveProduct from './components/ActiveProduct';

import { Box, Container } from '@mui/material';

import { useSelector } from 'react-redux';
import Cart from './components/Cart';

function App() {
  const currentProduct = useSelector(state => state.currentProduct);

  return (
    <Box>
      <Header />
      <Container>
        <Cart />
        {!currentProduct.name ? (
          <>
            <Categories />
            <Products />
          </>
        ) : (
          <ActiveProduct />
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
