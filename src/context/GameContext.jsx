import React, { createContext, useState, useEffect } from 'react';
import { scenarios } from '../logic/scenarios';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [effort, setEffort] = useState(100); // Starting effort value
  const [currentScenario, setCurrentScenario] = useState(null); // Current active scenario
  const [state, setState] = useState({
    aqi: 'Moderate', // Air Quality Index starts moderate
    waterAvailability: 'Balanced', // Water starts balanced
  });

  // Ensures the game starts with the first scenario
  useEffect(() => {
    startScenario(); // Start the game immediately
  }, []);

  const startScenario = () => {
    if (state.aqi === 'Poor') {
      setCurrentScenario(scenarios.airQuality[0]); // Show air quality related scenarios
    } else if (state.waterAvailability === 'Scarce') {
      setCurrentScenario(scenarios.waterAvailability[0]); // Show water-related scenarios
    } else {
      setCurrentScenario(scenarios.airQuality[0]); // Default to air quality scenario for now
    }
  };

  const makeDecision = (option) => {
    // Apply the effects of the chosen option
    setEffort((prevEffort) => prevEffort + option.effects.effort);

    // Update parameter state based on the decision
    if (option.effects.aqi) {
      setState((prevState) => ({ ...prevState, aqi: option.effects.aqi }));
    }

    if (option.effects.waterAvailability) {
      setState((prevState) => ({ ...prevState, waterAvailability: option.effects.waterAvailability }));
    }

    // Check if effort is still available and move to the next scenario
    if (effort + option.effects.effort > 0) {
      startScenario(); // Continue to the next scenario
    } else {
      setCurrentScenario(null); // Game over when effort runs out
    }
  };

  return (
    <GameContext.Provider value={{ currentScenario, effort, makeDecision, startScenario }}>
      {children}
    </GameContext.Provider>
  );
};
