import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const ResultPage = () => {
  const { gameResult } = useContext(GameContext);

  return (
    <div className="result-page">
      <h2>Game Over</h2>
      <p>Your Result: {gameResult}</p>
    </div>
  );
};
