import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const GamePanel = () => {
  const { currentScenario, effort, makeDecision } = useContext(GameContext);

  if (effort <= 0) {
    return (
      <div className="game-panel">
        <h2>Game Over</h2>
        <p>You ran out of effort!</p>
      </div>
    );
  }

  if (!currentScenario) {
    return (
      <div className="game-panel">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="game-panel">
      <h2>{currentScenario.name}</h2>
      <p>{currentScenario.description}</p>

      <div className="effort">
        <p><strong>Effort Remaining:</strong> {effort}</p>
      </div>

      <div className="options">
        <button onClick={() => makeDecision(currentScenario.option1)}>
          Option 1: {currentScenario.option1.text} (Effort: {currentScenario.option1.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option2)}>
          Option 2: {currentScenario.option2.text} (Effort: {currentScenario.option2.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option3)}>
          Option 3: {currentScenario.option3.text} (Effort: {currentScenario.option3.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option4)}>
          Option 4: {currentScenario.option4.text} (Effort: {currentScenario.option4.effects.effort})
        </button>
      </div>
    </div>
  );
};
