

import React, { useContext } from 'react';

const ResultPage = ({finalScore, feedback}) => {

  return (
    <div className="result-page">
      <h2>Game Over</h2>
      <p>Your final score is: {finalScore}</p>
      <h3>Feedback:</h3>
      <p>{feedback}</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default ResultPage;

