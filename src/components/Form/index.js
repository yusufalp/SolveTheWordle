import React, { useState } from 'react';
import { analyzeCurrentGuess } from '../../utils/analyzeCurrentGuess';

import './style.css';

const Form = ({ currentGuess, setCurrentGuess, userGuesses, setUserGuesses, userGuessAnalysis, setUserGuessAnalysis }) => {
  const [isFiveLetter, setIsFiveLetter] = useState(true);
  const [isEnglishLetter, setIsEnglishLetter] = useState(true);
  const regex = /^[a-zA-Z]+$/;

  const handleInvalidCharacters = (e) => {
    if (!regex.test(e.key)) {
      e.preventDefault();
      setIsEnglishLetter(false);
    } else {
      setIsEnglishLetter(true);
    }
  }

  const handleInputChange = (e) => {
    if (regex.test(e.target.value) || e.target.value === "") {
      setCurrentGuess(e.target.value.toUpperCase());
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length === 5) {
      setIsFiveLetter(true);
      let currentGuessAnalysis = analyzeCurrentGuess(currentGuess);
      setUserGuessAnalysis([...userGuessAnalysis, currentGuessAnalysis]);
      setUserGuesses([...userGuesses, currentGuess]);
      setCurrentGuess("");
    } else {
      setIsFiveLetter(false);
    }
  }

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
        onKeyDown={handleInvalidCharacters}
      ></input>
      {isEnglishLetter ? "" : <p className="Error">English letters only</p>}
      {isFiveLetter ? "" : <p className="error">You must enter a 5 letter word</p>}
      <button type="submit">ENTER</button>
    </form>
  );
}

export default Form;