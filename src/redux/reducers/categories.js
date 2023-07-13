import axios from 'axios';
import {
  createAction,
  createReducer,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const initialCategories = [
  { name: 'electronics', description: 'Tvs, laptops and more!' },
  { name: 'food', description: 'Everything tasty and savory' },
];

export const initialChosenCategory = 0;

export const chooseCategory = createAction('chooseCategory');
export const updateCategories = createAction('updateCategories');

export const categories = createReducer(initialCategories, {
  [updateCategories]: (state, action) => {
    return action.payload.payload.results;
  },
});

export const chosenCategory = createReducer(initialChosenCategory, {
  [chooseCategory]: (state, action) => {
    return action.payload;
  },
});

export const fetchCategories = createAsyncThunk(
  'updateCategories',
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching Categories', error);
    }
  }
);
