/**
 * Filters possible answers based on guess analysis
 * @param {string[]} possibleAnswers - Array of possible word answers
 * @param {Object[]} userGuessAnalysis - Array of analysis objects with letter, position, and includes properties
 * @returns {string[]} Filtered array of possible answers
 */
export const eliminateInvalidWords = (possibleAnswers, userGuessAnalysis) => {
  // Early return for empty analysis
  if (!userGuessAnalysis?.length) return possibleAnswers;

  // Count letter occurrences once
  const letterOccurrences = userGuessAnalysis.reduce((acc, { letter }) => {
    const key = letter.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // Filter words based on analysis criteria
  return possibleAnswers.filter((word) => {
    return userGuessAnalysis.every(({ letter, position, includes }, index) => {
      const lowercaseLetter = letter.toLowerCase();
      const letterAtPosition = word[index];

      // Case 1: Letter must be at specific position
      if (position) {
        return letterAtPosition === lowercaseLetter;
      }

      // Case 2: Letter must be included but not at this position
      if (includes) {
        return (
          word.includes(lowercaseLetter) && letterAtPosition !== lowercaseLetter
        );
      }

      // Case 3: Letter must not be in word if it's the only occurrence
      return (
        letterOccurrences[lowercaseLetter] > 1 ||
        !word.includes(lowercaseLetter)
      );
    });
  });
};
