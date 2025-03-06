import React from "react";

import Grid from "../Grid";

const Words = ({ indX, analysis, userGuessAnalysis, setUserGuessAnalysis }) => {
  return (
    <div>
      {analysis.map((word, indY) => (
        <Grid
          key={indY}
          indX={indX}
          indY={indY}
          userGuessAnalysis={userGuessAnalysis}
          setUserGuessAnalysis={setUserGuessAnalysis}
          letter={word.letter}
        />
      ))}
    </div>
  );
};

export default Words;
