import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

import { Provider } from 'react-redux';
import store from '../../redux/store';
test('renders Header links', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const headerElement = screen.getByText(/OUR STORE/i);
  expect(headerElement).toBeInTheDocument();
});
