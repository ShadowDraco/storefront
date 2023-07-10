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

export const updateProduct = createAction('updateProduct');
export const updateProducts = createAction('updateProducts');
export const getProducts = createAction('getProducts');

export const products = createReducer(initialProducts, {
  [updateProduct]: (state, action) => {
    let newState = [...state].map(item => {
      if (item._id == action.payload.payload._id) return action.payload.payload;
      return item;
    });

    return newState;
  },

  [getProducts]: (state, action) => {
    return action.payload.payload.results;
  },
});

export const fetchProducts = createAsyncThunk(getProducts, async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);

  return response.data;
});

export const asyncUpdateProduct = createAsyncThunk(
  updateProduct,
  async item => {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/products/${item._id}`,
      { inStock: item.inStock }
    );
    return response.data;
  }
);

export default products;
