import Grid from './Grid';

const Words = ({ indX, userGuessAnalysis, setUserGuessAnalysis, analysis }) => {
  return (
    <div>
      {analysis.map((word, ind) => (
        <Grid
          key={ind}
          indX={indX}
          indY={ind}
          userGuessAnalysis={userGuessAnalysis}
          setUserGuessAnalysis={setUserGuessAnalysis}
          letter={word.letter}
        />
      ))}
    </div>
  );
}

export default Words;