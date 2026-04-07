import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number', () => {
  render(<App />);
  expect(screen.getByText(/Group 3/i)).toBeInTheDocument();
});

test('renders team member names', () => {
  render(<App />);
  expect(screen.getByText(/Dhairya Gopalbhai Rana/i)).toBeInTheDocument();
  expect(screen.getByText(/Niriya/i)).toBeInTheDocument();
});