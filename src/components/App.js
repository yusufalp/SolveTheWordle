import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Words from './Words';
import Result from './Result';
import { wordsList } from '../wordsList';
import Modal from './Modal';

import '../css/App.css';

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState([]);
  const [userGuessAnalysis, setUserGuessAnalysis] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const possibleAnswers = wordsList;

  return (
    <div className="App">
      <div className="user">
        {!isModalOpen && <i className="fa-solid fa-circle-info fa-icons-style" onClick={() => setIsModalOpen(!isModalOpen)}></i>}
        {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
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
