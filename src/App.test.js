import { render, screen } from '@testing-library/react';
import App from './App';

describe("Rendering the App component", () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Solve The Wordle/i);
    expect(linkElement).toBeInTheDocument();
  });
});