import { render, screen, fireEvent } from '@testing-library/react';
import ActiveProduct from '.';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('renders selected product card', () => {
  const product = {
    name: 'TV',
    description: 'See all the things',
    url: `https://source.unsplash.com/random?tv`,
    price: 600,
    inStock: Math.random() * 20 + 10,
  };
  render(
    <Provider store={store}>
      <ActiveProduct product={product} />
    </Provider>
  );

  const cardElement = screen.getByText(/TV/i);
  const relatedElement = screen.getByText(/Related Items/i);
  expect(cardElement).toBeInTheDocument();
  expect(relatedElement).toBeInTheDocument();
});
