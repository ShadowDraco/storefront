import { render, screen, fireEvent } from '@testing-library/react';
import Products from '../Products';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('renders product card', () => {
  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  const cardElement = screen.getByText(/See all the things/i);
  expect(cardElement).toBeInTheDocument();
});
