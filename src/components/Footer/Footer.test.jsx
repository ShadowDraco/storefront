import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';
test('renders copyright', () => {
  render(<Footer />);

  const footerElement = screen.getByText(/© Ethan Storm 2023/i);
  expect(footerElement).toBeInTheDocument();
});
