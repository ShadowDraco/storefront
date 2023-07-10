import axios from 'axios';
import {
  createAction,
  createReducer,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const initialProducts = {
  products: [],
  loading: true,
};

export const updateProducts = createAction('updateProducts');
export const getProducts = createAction('getProducts');

export const products = createReducer(initialProducts, {
  [updateProducts]: (state, action) => {
    return [...state, action.payload];
  },

  [getProducts]: (state, action) => {
    return action.payload.payload.results;
  },
});

export const fetchProducts = createAsyncThunk(getProducts, async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);

  return response.data;
});

export default products;
