import React, { useState } from "react";

import { analyzeGuess } from "../../utils/analyzeGuess";

import "./style.css";

const Form = ({
  currentGuess,
  setCurrentGuess,
  setUserGuesses,
  setUserGuessAnalysis,
}) => {
  const [isEnglishLetter, setIsEnglishLetter] = useState(null);

  const regex = /^[a-zA-Z]+$/;
  console.log('currentGuess :>> ', currentGuess);

  const handleInvalidCharacters = (e) => {
    if (e.key.match(regex)) {
      setIsEnglishLetter(false);
    } else {
      setIsEnglishLetter(true);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.value.match(regex) || e.target.value === "") {
      setCurrentGuess(e.target.value.toUpperCase());
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (currentGuess.length === 5) {
      let currentGuessAnalysis = analyzeGuess(currentGuess);

      setUserGuessAnalysis((prevAnalysis) => [...prevAnalysis, currentGuessAnalysis]);
      setUserGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
      setCurrentGuess("");
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        data-testid="guess-box"
        id="guess"
        name="guess"
        type="text"
        value={currentGuess}
        maxLength="5"
        placeholder="GUESS"
        autoFocus
        required
        onChange={handleInputChange}
        onKeyUp={handleInvalidCharacters}
      ></input>

      {isEnglishLetter && <p className="error">English letters only</p>}

      <button type="submit">ENTER</button>
    </form>
  );
};

export default Form;
