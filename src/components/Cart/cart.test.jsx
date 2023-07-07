import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '.';

import { Provider } from 'react-redux';
import store from '../../redux/store';
test('renders Header links', () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const cartElement = screen.getByText(/Cart/i);
  expect(cartElement).toBeInTheDocument();
});
