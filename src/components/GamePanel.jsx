import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import ResultPage from "./ResultPage"; // Import ResultPage to render when the game is over

export const GamePanel = () => {
  const {
    currentScenario,
    effort,
    makeDecision,
    gameOver,
    finalScore,
    feedback,
  } = useContext(GameContext);

  // Render ResultPage when game is over
  if (gameOver) {
    return <ResultPage finalScore={finalScore} feedback={feedback} />;
  }

  // Render game over message if effort is exhausted
  if (effort <= 0) {
    return (
      <div className="game-panel">
        <h2>Game Over</h2>
        <p>You ran out of effort!</p>
      </div>
    );
  }

  // Render loading message if scenario is not available
  if (!currentScenario) {
    return (
      <div className="game-panel">
        <h2>Loading...</h2>
      </div>
    );
  }

  // Render the game scenario
  return (
    <div className="game-panel">
      <h2>{currentScenario.name}</h2>
      <p>{currentScenario.description}</p>

      <div className="effort">
        <p>
          <strong>Capacity Remaining:</strong> {effort}
        </p>
      </div>

      <div className="options">
        <button onClick={() => makeDecision(currentScenario.option1)}>
          {currentScenario.option1.text} (Capacity:{" "}
          {currentScenario.option1.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option2)}>
          {currentScenario.option2.text} (Capacity:{" "}
          {currentScenario.option2.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option3)}>
          {currentScenario.option3.text} (Capacity:{" "}
          {currentScenario.option3.effects.effort})
        </button>
        <button onClick={() => makeDecision(currentScenario.option4)}>
          {currentScenario.option4.text} (Capacity:{" "}
          {currentScenario.option4.effects.effort})
        </button>
      </div>
    </div>
  );
};
