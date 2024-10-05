import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const GamePanel = () => {
  const { currentScenario, makeDecision, nextScenario } =
    useContext(GameContext);

  if (!currentScenario) {
    return (
      <div className="game-panel">
        <h2>Game Over</h2>
        <p>You've completed all scenarios!</p>
      </div>
    );
  }

  return (
    <div className="game-panel">
      <h2>{currentScenario.name}</h2>
      <p>{currentScenario.description}</p>
      <div className="options">
        <button onClick={() => makeDecision("option1")}>
          Option 1: {currentScenario.option1}
        </button>
        <button onClick={() => makeDecision("option2")}>
          Option 2: {currentScenario.option2}
        </button>
      </div>
    </div>
  );
};
