/**
 * Analyzes a guess by breaking it into individual letter objects
 * @param {string} guess - The word to analyze
 * @returns {Object[]} Array of letter analysis objects with default properties
 */
export const analyzeGuess = (guess) => {
  // Input validation and early return
  if (typeof guess !== "string" || !guess) {
    return [];
  }

  return Array.from(guess, (letter) => ({
    letter,
    position: false,
    includes: false,
  }));
};
