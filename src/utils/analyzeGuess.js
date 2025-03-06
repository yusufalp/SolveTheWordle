export const analyzeGuess = (guess) => {
  const result = [];

  guess.split("").map((letter) =>
    result.push({
      letter,
      position: false,
      includes: false,
    })
  );

  return result;
};
