import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import products from './reducers/products';
import { categories, chosenCategory } from './reducers/categories';
import currentProduct from './reducers/currentProduct';
import cart from './reducers/cart';

const reducers = combineReducers({
  products,
  categories,
  chosenCategory,
  currentProduct,
  cart,
});

const store = () => {
  return configureStore({ reducer: reducers });
};

export default store();
