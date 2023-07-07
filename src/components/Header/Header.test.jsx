import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
test('renders Header links', () => {
  render(<Header />);

  const headerElement = screen.getByText(/OUR STORE/i);
  expect(headerElement).toBeInTheDocument();
});
