export const eliminateInvalidWords = (possibleAnswers, userGuessAnalysis) => {
  const letterCount = {};

  for (const element of userGuessAnalysis) {
    let lowercaseLetter = element.letter.toLowerCase();
    if (letterCount[lowercaseLetter]) {
      letterCount[lowercaseLetter] += 1;
    } else {
      letterCount[lowercaseLetter] = 1;
    }
  }

  for (let i = 0; i < userGuessAnalysis.length; i++) {
    let lowercaseLetter = userGuessAnalysis[i].letter.toLowerCase();
    console.log(letterCount);
    console.log(userGuessAnalysis[i]);
    if (userGuessAnalysis[i].position) {
      possibleAnswers = possibleAnswers.filter(word => word[i] === lowercaseLetter);
    } else {
      if (userGuessAnalysis[i].includes) {
        possibleAnswers = possibleAnswers.filter(word => word.includes(lowercaseLetter));
        possibleAnswers = possibleAnswers.filter(word => word[i] !== lowercaseLetter);
      } else {
        if (letterCount[lowercaseLetter] === 1) {
          possibleAnswers = possibleAnswers.filter(word => !word.includes(lowercaseLetter))
        }
      }
    }
  }
  return possibleAnswers;
}