import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Catalog Viewer title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Lauren's Catalog Viewer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders product cards', () => {
  render(<App />);
  const productCards = screen.getAllByTestId('product-card');
  expect(productCards.length).toBeGreaterThan(0);
});

test('renders jacket cover images', () => {
  render(<App />);
  const imageElements = screen.getAllByTestId('jacket-cover-image');
  
  imageElements.forEach(imageElement => {
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src');
  });
});
