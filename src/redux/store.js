import { legacy_createStore as createStore, combineReducers } from 'redux';

import products from './reducers/products';
import categories from './reducers/categories';
import currentProduct from './reducers/currentProduct';
import cart from './reducers/cart';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducers = combineReducers({
  products,
  categories,
  currentProduct,
  cart,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
