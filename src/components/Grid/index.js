import React, { useState } from "react";

import "./style.css";

const Grid = ({
  indX,
  indY,
  userGuessAnalysis,
  setUserGuessAnalysis,
  letter,
}) => {
  const [color, setColor] = useState("bg-black");

  const handleClick = () => {
    const updatedUserGuessAnalysis = [...userGuessAnalysis];

    if (color === "bg-black") {
      updatedUserGuessAnalysis[indX][indY].includes = true;
      setColor("bg-yellow");
    } else if (color === "bg-yellow") {
      updatedUserGuessAnalysis[indX][indY].position = true;
      setColor("bg-green");
    } else {
      updatedUserGuessAnalysis[indX][indY].position = false;
      updatedUserGuessAnalysis[indX][indY].includes = false;
      setColor("bg-black");
    }

    setUserGuessAnalysis(updatedUserGuessAnalysis);
  };

  return (
    <span className={`letter-grid ${color}`} onClick={handleClick}>
      {letter}
    </span>
  );
};

export default Grid;
