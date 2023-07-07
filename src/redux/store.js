import { createStore, combineReducers } from 'redux';

import products from './reducers/products';
import categories from './reducers/categories';

const rootReducer = combineReducers({
  products,
  categories,
});

export default createStore(rootReducer);
