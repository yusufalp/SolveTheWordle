export const analyzeCurrentGuess = (guess) => {
  const result = [];

  guess.split("").map(letter => (
    result.push({
      letter,
      position: false,
      includes: false
    })
  ));

  return result;
}