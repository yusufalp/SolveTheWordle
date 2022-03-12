import { useState } from 'react';

const Form = () => {
  const regex = /^[a-zA-Z]+$/;

  const [guess, setGuess] = useState("");

  const handleInvalidCharacters = (e) => {
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleChange = (e) => {
    if (regex.test(e.target.value)) {
      setGuess(e.target.value);
    }
  }

  console.log(guess);

  return (

    <form>
      <label htmlFor="guess"></label>
      <input
        id="guess"
        name="guess"
        type="text"
        maxLength="5"
        autoFocus
        onChange={handleChange}
        onKeyDown={handleInvalidCharacters}
      ></input>
      <button type="submit">Enter</button>
    </form>
  );
}

export default Form;