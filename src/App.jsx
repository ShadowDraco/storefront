import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import { Box } from '@mui/material';

import ActiveProduct from './components/ActiveProduct';
import CartPage from './components/CartPage';
import StoreFront from './components/StoreFront';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App({ testProducts, testCategories }) {
  return (
    <Box>
      <Header />

      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <StoreFront
                testProducts={testProducts}
                testCategories={testCategories}
              />
            }
          />
          <Route
            path='/cart'
            element={<CartPage />}
          />
          <Route
            path='/product/:id'
            element={<ActiveProduct />}
          />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
