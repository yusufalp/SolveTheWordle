import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Words from './Words';
import Result from './Result';
import { wordsList } from '../wordsList';

import '../css/App.css';

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState([]);
  const [userGuessAnalysis, setUserGuessAnalysis] = useState([]);
  const possibleAnswers = wordsList;

  return (
    <div className="App">
      <div class="user">
        <i class="fa-solid fa-circle-info"></i>
        <Header />
        {userGuessAnalysis.map((analysis, ind) => (
          <Words
            key={ind}
            indX={ind}
            userGuessAnalysis={userGuessAnalysis}
            setUserGuessAnalysis={setUserGuessAnalysis}
            analysis={analysis}
          />
        ))}
        <Form
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          userGuesses={userGuesses}
          setUserGuesses={setUserGuesses}
          userGuessAnalysis={userGuessAnalysis}
          setUserGuessAnalysis={setUserGuessAnalysis}
        />
      </div>
      {userGuesses.length >= 1 &&
        <Result
          possibleAnswers={possibleAnswers}
          userGuessAnalysis={userGuessAnalysis}
        />}
    </div>
  );
}

export default App;
