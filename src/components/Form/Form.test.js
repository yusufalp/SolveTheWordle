import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from './index';

afterEach(cleanup);

describe("Rendering the Form component", () => {
  test("renders the form element", () => {
    const { getByTestId, getByRole } = render(<Form />);

    const textInputElement = getByTestId("guess-box");
    const buttonElement = getByRole("button");

    expect(textInputElement).toBeInTheDocument();
    expect(textInputElement).toHaveValue("");
    expect(textInputElement).toHaveAttribute("type", "text");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("ENTER");
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).not.toHaveAttribute("disabled");
  });

  test("changes input text value", () => {
    const formProps = {
      setCurrentGuess: jest.fn(),
    }

    const { getByTestId } = render(<Form {...formProps} />);

    const textInputElement = getByTestId("guess-box");

    expect(textInputElement).toBeInTheDocument();
    expect(textInputElement).toHaveValue("");
    fireEvent.change(textInputElement, { target: { value: "SOLVE" } });
    expect(textInputElement).toHaveValue("SOLVE");
  });

  test("submits form on button click", () => {
    const formProps = {
      currentGuess: "GUESS",
      setCurrentGuess: jest.fn(),
      userGuessAnalysis: [],
      setUserGuessAnalysis: jest.fn(),
      userGuesses: [],
      setUserGuesses: jest.fn(),
    }
    const { getByText } = render(<Form {...formProps} />);

    const buttonElement = getByText(/ENTER/i);

    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(formProps.setCurrentGuess).toHaveBeenCalled();
    expect(formProps.setUserGuessAnalysis).toHaveBeenCalled();
    expect(formProps.setUserGuesses).toHaveBeenCalled();
  });

  test("shows error message if an invalid character is entered", () => {
    const formProps = {
      currentGuess: ""
    }

    const { getByText, getByTestId } = render(<Form {...formProps} />);

    const textInputElement = getByTestId("guess-box");
    fireEvent.keyUp(textInputElement, { key: "1" });

    const errorElement = getByText(/English letters only/i);
    expect(errorElement).toBeInTheDocument();
  });
});