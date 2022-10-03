import React, { useState } from 'react';

const Grid = ({ indX, indY, userGuessAnalysis, setUserGuessAnalysis, letter }) => {
  const [color, setColor] = useState("bg-black");

  const handleClick = () => {
    if (color === "bg-black") {
      userGuessAnalysis[indX][indY].includes = true;
      setColor("bg-yellow");
    } else if (color === "bg-yellow") {
      userGuessAnalysis[indX][indY].position = true;
      setColor("bg-green");
    } else {
      userGuessAnalysis[indX][indY].position = false;
      userGuessAnalysis[indX][indY].includes = false;
      setColor("bg-black");
    }
    let newUserGuessAnalysis = [...userGuessAnalysis];
    setUserGuessAnalysis(newUserGuessAnalysis);
  }

  return (
    <span
      className={`letter-grid ${color}`}
      onClick={handleClick}
    >
      {letter}
    </span>
  );
}

export default Grid;