import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Markdown previewer/i);
  expect(titleElement).toBeInTheDocument();
});
