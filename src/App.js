import React, { useState } from 'react';
import Modal from './components/Modal';
import Words from './components/Words';
import Form from './components/Form';
import Result from './components/Result';
import Header from './components/shared/Header';
import FooterLogo from './components/shared/FooterLogo';

import { wordsList } from './utils/wordsList';

import './App.css';

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState([]);
  const [userGuessAnalysis, setUserGuessAnalysis] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const possibleAnswers = wordsList;

  return (
    <div className="App" data-testid="App">
      <div className="user">
        {!isModalOpen && <i className="fa-solid fa-circle-info fa-icons-style" onClick={() => setIsModalOpen(!isModalOpen)} data-testid="info-icon"></i>}
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
      <FooterLogo classes="twitter-logo" logo="twitter" link="https://twitter.com/yalp122" />
      <FooterLogo classes="github-logo" logo="github" link="https://github.com/yusufalp" />
    </div>
  );
}

export default App;
