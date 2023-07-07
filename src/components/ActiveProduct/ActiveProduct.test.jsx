import { render, screen, fireEvent } from '@testing-library/react';
import ActiveProduct from '.';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('renders selected product card', () => {
  const product = {
    name: 'TV',
    description: 'See all the things',
    url: `${import.meta.env.VITE_UNSPLASH_URL}tv`,
    price: 600,
    inventory: Math.random() * 20 + 10,
  };
  render(
    <Provider store={store}>
      <ActiveProduct product={product} />
    </Provider>
  );

  const cardElement = screen.getByText(/See all the things/i);
  expect(cardElement).toBeInTheDocument();
});
