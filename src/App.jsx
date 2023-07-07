import { useState } from 'react';
import './App.css';

import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';

import { Box, Container } from '@mui/material';
import AddButtons from './components/AddButtons';

function App() {
  const [chosenCategory, setChosenCategory] = useState(0);

  return (
    <Box>
      <Header />
      <Container>
        <Categories setChosenCategory={setChosenCategory} />
        <Products chosenCategory={chosenCategory} />
        <AddButtons chosenCategory={chosenCategory} />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
