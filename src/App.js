import React, { useState } from "react";

import Modal from "./components/Modal";
import Words from "./components/Words";
import Form from "./components/Form";
import Result from "./components/Result";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import { WORD_LIST } from "./constants/constants";

import "./App.css";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState([]);
  const [userGuessAnalysis, setUserGuessAnalysis] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App" data-testid="App">
      <div className="user">
        {!isModalOpen && (
          <i
            className="fa-solid fa-circle-info fa-icons-style"
            onClick={() => setIsModalOpen(!isModalOpen)}
            data-testid="info-icon"
          ></i>
        )}
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        )}

        <Header />

        {userGuessAnalysis.map((analysis, indX) => (
          <Words
            key={indX}
            indX={indX}
            analysis={analysis}
            userGuessAnalysis={userGuessAnalysis}
            setUserGuessAnalysis={setUserGuessAnalysis}
          />
        ))}

        <Form
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          setUserGuesses={setUserGuesses}
          setUserGuessAnalysis={setUserGuessAnalysis}
        />
      </div>

      {userGuesses.length > 0 && (
        <Result
          possibleAnswers={WORD_LIST}
          userGuessAnalysis={userGuessAnalysis}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
