import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '.';

import { Provider } from 'react-redux';
import store from '../../redux/store';
test('renders cart', () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const cartElement = screen.getByTestId('CART');
  expect(cartElement).toBeInTheDocument();
});
