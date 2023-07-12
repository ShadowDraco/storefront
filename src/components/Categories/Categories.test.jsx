import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '../Categories';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { initialCategories } from '../../redux/reducers/categories';

test('renders main title', () => {
  render(
    <Provider store={store}>
      <Categories testCategories={initialCategories} />
    </Provider>
  );

  const titleElement = screen.getByTestId('CATEGORY');
  expect(titleElement).toBeInTheDocument();
});
