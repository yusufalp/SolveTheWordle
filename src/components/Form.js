import { analyzeCurrentGuess } from '../functions/analyzeCurrentGuess';

const Form = ({ currentGuess, setCurrentGuess, userGuesses, setUserGuesses, userGuessAnalysis, setUserGuessAnalysis }) => {
  const regex = /^[a-zA-Z]+$/;

  const handleInvalidCharacters = (e) => {
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleInputChange = (e) => {
    if (regex.test(e.target.value) || e.target.value === "") {
      setCurrentGuess(e.target.value.toUpperCase());
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length === 5) {
      let currentGuessAnalysis = analyzeCurrentGuess(currentGuess);
      setUserGuessAnalysis([...userGuessAnalysis, currentGuessAnalysis])
      setUserGuesses([...userGuesses, currentGuess]);
      setCurrentGuess("");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="guess"></label>
      <input
        id="guess"
        name="guess"
        type="text"
        value={currentGuess}
        maxLength="5"
        autoFocus
        required
        onChange={handleInputChange}
        onKeyDown={handleInvalidCharacters}
      ></input>
      <button type="submit">ENTER</button>
    </form>
  );
}

export default Form;