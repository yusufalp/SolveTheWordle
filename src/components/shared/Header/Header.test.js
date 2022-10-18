import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Header from './index';

afterEach(cleanup);

describe("Rendering the Header component", () => {
  test("renders header element", () => {
    const { getByText } = render(<Header />);

    const headerElement = getByText(/Solve The Wordle/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("app-header");
  });
});
