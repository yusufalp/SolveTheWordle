import React from "react";
import "./style.css";

import { eliminateInvalidWords } from "../../utils/eliminateInvalidWords";

const Result = ({ possibleAnswers, userGuessAnalysis }) => {
  for (let analysis of userGuessAnalysis) {
    possibleAnswers = eliminateInvalidWords(possibleAnswers, analysis);
  }
  return (
    <div>
      <p>Possible Answers: {possibleAnswers.length}</p>
      {possibleAnswers.map((answer, ind) => (
        <div className="answer" key={`${ind}-${answer}`}>
          {answer.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Result;
