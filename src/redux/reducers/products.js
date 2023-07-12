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

export const getCurrentProduct = createAction('getCurrentProduct');
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
  [getCurrentProduct]: (state, action) => {
    return {
      ...state,
      currentProduct: action.payload.results.filter(
        item => item._id === action.payload.id
      )[0],
    };
  },
});

export const setCurrentProduct = createAsyncThunk(
  getCurrentProduct,
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      return response.data;
    } catch (error) {
      console.error('Error setting current product', error);
    }
  }
);

export const fetchProducts = createAsyncThunk(getProducts, async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Products', error);
  }
});

export const asyncUpdateProduct = createAsyncThunk(
  updateProduct,
  async item => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/products/${item._id}`,
        { inStock: item.inStock }
      );

      return response.data;
    } catch (error) {
      console.error('Error Updating Product', error);
    }
  }
);

export default products;
