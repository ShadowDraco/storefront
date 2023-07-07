import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '../Categories';
import store from '../../redux/store';
import { Provider } from 'react-redux';

test('renders main title', () => {
  const mockFunction = parameter => {
    return parameter;
  };

  render(
    <Provider store={store}>
      <Categories setChosenCategory={mockFunction} />
    </Provider>
  );

  const titleElement = screen.getByTestId('CATEGORY');
  expect(titleElement).toBeInTheDocument();
});
