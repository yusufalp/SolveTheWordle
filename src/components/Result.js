// import { eliminateInvalidWords } from "../functions/eliminateInvalidWords";

const Result = ({ possibleAnswers, userGuessAnalysis }) => {
  for (let analysis of userGuessAnalysis) {
    possibleAnswers = [];
  }
  return (
    <div>
      {possibleAnswers.map((answer, ind) => (
        <div key={`${ind}-${answer}`}>{answer}</div>
      ))}
    </div>
  );
}

export default Result;