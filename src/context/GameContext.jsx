import React, { createContext, useState, useEffect } from "react";
import { scenarios } from "../logic/scenarios";
import {
  applyDecisionEffects,
  getNextScenario,
  calculateScore,
  provideFeedback,
} from "../logic/gameLogic";
import ResultPage from "../components/ResultPage"; // Adjust path according to your structure

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [effort, setEffort] = useState(100); // Starting effort value
  const [currentDomain, setCurrentDomain] = useState("airQuality"); // Track current domain
  const [indices, setIndices] = useState({
    airQuality: 0,
    waterAvailability: 0,
    // Add other domains here if needed
  }); // Track scenario indices for each domain
  const [domainsLeft, setDomainsLeft] = useState([
    "airQuality",
    "waterAvailability",
  ]); // Domains with scenarios left
  const [currentScenario, setCurrentScenario] = useState(null); // Current active scenario
  const [state, setState] = useState({
    aqi: "Moderate", // Air Quality Index starts moderate
    waterAvailability: "Balanced", // Water starts balanced
  });
  const [gameOver, setGameOver] = useState(false); // Track game over state
  const [finalScore, setFinalScore] = useState(null); // Store final score
  const [feedback, setFeedback] = useState(""); // Store feedback

  useEffect(() => {
    // Get the index for the current domain and fetch the scenario
    const currentScenarioIndex = indices[currentDomain];
    setCurrentScenario(
      getNextScenario(state, currentScenarioIndex, scenarios, currentDomain)
    );
  }, [currentDomain, indices, state]);

  const makeDecision = (option) => {
    // Apply decision effects using gameLogic.js
    const { newEffort, newState } = applyDecisionEffects(option, state, effort);
    setEffort(newEffort);
    setState(newState);

    // Check if the game is over
    if (newEffort > 0) {
      // Check if there are more scenarios in the current domain
      if (indices[currentDomain] + 1 < scenarios[currentDomain].length) {
        // Move to the next scenario in the current domain
        setIndices((prevIndices) => ({
          ...prevIndices,
          [currentDomain]: prevIndices[currentDomain] + 1,
        }));
      } else {
        // If no more scenarios in this domain, move to the next available domain
        moveToNextDomain();
      }
    } else {
      // End the game if effort is exhausted
      endGame(newState);
    }
  };

  const moveToNextDomain = () => {
    // Remove the current domain from the list of domainsLeft
    const remainingDomains = domainsLeft.filter(
      (domain) => domain !== currentDomain
    );

    if (remainingDomains.length > 0) {
      // Move to the next available domain
      setCurrentDomain(remainingDomains[0]);
      setDomainsLeft(remainingDomains);
    } else {
      // End the game if all domains have been exhausted
      endGame(state);
    }
  };

  const endGame = (finalState) => {
    setEffort(0); // Prevent negative effort
    setGameOver(true);
    const score = calculateScore(finalState);
    setFinalScore(score);
    const feedbackText = provideFeedback(score);
    setFeedback(feedbackText);
  };

  // Conditional rendering: if gameOver is true, show the ResultPage component
  if (gameOver) {
    return <ResultPage finalScore={finalScore} feedback={feedback} />;
  }

  return (
    <GameContext.Provider
      value={{
        currentScenario,
        effort,
        gameOver,
        finalScore,
        makeDecision,
        setCurrentDomain, // Expose function to change domain (if needed)
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
