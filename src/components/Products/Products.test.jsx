import { render, screen, fireEvent } from '@testing-library/react';
import Products from '../Products';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('renders product card', () => {
  const testProducts = [
    {
      name: 'Pizza',
      description: 'See all the things',
      category: 'food',
      price: 600,
      inStock: Math.random() * 20 + 10,
    },
    {
      name: 'cookies',
      description: 'See all the things',
      category: 'food',
      price: 600,

      inStock: Math.random() * 20 + 10,
    },
  ];
  render(
    <Provider store={store}>
      <Products testProducts={testProducts} />
    </Provider>
  );

  const cardElement = screen.getByTestId('PRODUCTS');
  expect(cardElement).toBeInTheDocument();
});
