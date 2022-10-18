import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import FooterLogo from './index';

afterEach(cleanup);

describe("Rendering the FooterLogo component", () => {
  test("renders the FooterLogo", () => {
    const { getByTestId } = render(<FooterLogo />);

    const iconElement = getByTestId("icon-element");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("fa-brands");
  });

  test("opens the link by clicking the logo", () => {
    const footerLogoProps = {
      link: "https://github.com/yusufalp",
      logo: "github",
    }

    const { getByTestId } = render(<FooterLogo {...footerLogoProps} />);

    const iconElement = getByTestId("icon-element");
    expect(iconElement).toBeInTheDocument();
    fireEvent.click(iconElement);
  });
});