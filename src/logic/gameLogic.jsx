// // gameLogic.js

// export const applyDecisionEffects = (option, state, effort) => {
//   // Calculate new effort
//   const newEffort = effort + option.effects.effort;

//   // Update state based on option effects
//   const newState = { ...state };
//   if (option.effects.aqi) {
//     newState.aqi = option.effects.aqi;
//   }
//   if (option.effects.waterAvailability) {
//     newState.waterAvailability = option.effects.waterAvailability;
//   }

//   return { newEffort, newState };
// };

// export const getNextScenario = (state, currentScenarioIndex, scenarios) => {
//   // Logic to choose the next scenario based on state
//   if (state.aqi === "Poor") {
//     return scenarios.airQuality[currentScenarioIndex];
//   } else if (state.waterAvailability === "Scarce") {
//     return scenarios.waterAvailability[currentScenarioIndex];
//   } else {
//     return scenarios.airQuality[currentScenarioIndex]; // Default to air quality scenario
//   }
// };

// export const calculateScore = (state) => {
//   let score = 0;

//   // Calculate score based on final parameters
//   if (state.aqi === "Good") {
//     score += 10;
//   } else if (state.aqi === "Moderate") {
//     score += 5;
//   }

//   if (state.waterAvailability === "Balanced") {
//     score += 5;
//   } else if (state.waterAvailability === "Abundant") {
//     score += 10;
//   }

//   return score;
// };

// export const provideFeedback = (score) => {
//   let feedback = "";

//   if (score > 15) {
//     feedback = "Excellent! You managed the environment very well.";
//   } else if (score > 5) {
//     feedback = "Good effort, but there's room for improvement.";
//   } else {
//     feedback = "You might need to rethink your strategy next time.";
//   }

//   return feedback;
// };
// gameLogic.js

export const applyDecisionEffects = (option, state, effort) => {
  // Calculate new effort
  const newEffort = effort + option.effects.effort;

  // Update state based on option effects
  const newState = { ...state };
  if (option.effects.aqi) {
    newState.aqi = option.effects.aqi;
  }
  if (option.effects.waterAvailability) {
    newState.waterAvailability = option.effects.waterAvailability;
  }

  return { newEffort, newState };
};

export const getNextScenario = (state, currentScenarioIndex, scenarios) => {
  // Logic to choose the next scenario based on state
  if (state.aqi === "Poor") {
    return scenarios.airQuality[currentScenarioIndex];
  } else if (state.waterAvailability === "Scarce") {
    return scenarios.waterAvailability[currentScenarioIndex];
  } else {
    return scenarios.airQuality[currentScenarioIndex]; // Default to air quality scenario
  }
};

export const calculateScore = (state) => {
  let score = 0;

  // Calculate score based on final parameters
  if (state.aqi === "Good") {
    score += 10;
  } else if (state.aqi === "Moderate") {
    score += 5;
  }

  if (state.waterAvailability === "Balanced") {
    score += 5;
  } else if (state.waterAvailability === "Abundant") {
    score += 10;
  }

  return score;
};

export const provideFeedback = (score) => {
  let feedback = "";

  if (score > 15) {
    feedback = "Excellent! You managed the environment very well.";
  } else if (score > 5) {
    feedback = "Good effort, but there's room for improvement.";
  } else {
    feedback = "You might need to rethink your strategy next time.";
  }

  return feedback;
};
