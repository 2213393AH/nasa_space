import React, { createContext, useState } from "react";
import { scenarios } from "../logic/scenarios";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [gameResult, setGameResult] = useState("");

  const currentScenario = scenarios[currentScenarioIndex];

  const makeDecision = (option) => {
    // Basic decision logic: decide based on the option clicked
    const result =
      option === "option1" ? "Positive Outcome" : "Negative Outcome";
    setGameResult(result);

    // Move to the next scenario
    const nextIndex = currentScenarioIndex + 1;
    if (nextIndex < scenarios.length) {
      setCurrentScenarioIndex(nextIndex);
    } else {
      // If no more scenarios, set currentScenario to null to show "Game Over"
      setCurrentScenarioIndex(null);
    }
  };

  return (
    <GameContext.Provider value={{ currentScenario, gameResult, makeDecision }}>
      {children}
    </GameContext.Provider>
  );
};
