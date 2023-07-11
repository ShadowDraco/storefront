import { render, screen, fireEvent } from '@testing-library/react';
import CartPage from '.';

import { Provider } from 'react-redux';
import store from '../../redux/store';
test('renders cart page', () => {
  render(
    <Provider store={store}>
      <CartPage />
    </Provider>
  );

  const cartElement = screen.getByTestId('CartPage');

  expect(cartElement).toBeInTheDocument();
});

test('renders cart total', () => {
  const cart = [
    { name: 'pizza', price: 1.99 },
    { name: 'cookies', price: 2.38 },
    { name: 'banana', price: 0.99 },
  ];

  render(
    <Provider store={store}>
      <CartPage testCart={cart} />
    </Provider>
  );

  const totalElement = screen.getByTestId('TOTAL');
  expect(totalElement).toBeInTheDocument();
  expect(totalElement).toHaveTextContent('$5.36');
});
