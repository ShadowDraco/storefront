import { render, screen } from '@testing-library/react';
import App from '../src/App';

import store from '../src/redux/store';
import { Provider } from 'react-redux';

describe('App', () => {
  test('renders main title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headline = screen.getByText(/OUR STORE/i);
    expect(headline).toBeInTheDocument();
  });
});
