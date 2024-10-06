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
  if (option.effects.greenSpaces) {
    newState.greenSpaces = option.effects.greenSpaces;
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
    return scenarios.greenSpaces[currentScenarioIndex];
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

export const provideFeedback = (score, state) => {
  let feedback = "";

  if (score > 25) {
    feedback = "Excellent! You have managed air quality, water availability, and green spaces with great skill. Keep up the outstanding work in balancing environmental sustainability!";
  } else if (score > 15) {
    feedback = "Good job! You made solid decisions, but there's room for improvement. Try focusing more on maintaining a balance between all environmental factors.";
  } else if (score > 5) {
    feedback = "You made some progress, but there are noticeable gaps. It's important to make balanced efforts to improve air quality, water availability, and green spaces.";
  } else {
    feedback = "Your approach needs significant improvement. Consider the broader environmental impact and focus on balancing air quality, water resources, and green space sustainability.";
  }

  // Identify the parameter with the lowest value and provide specific feedback
  const lowestParam = findLowestParameter(state);
  feedback += `\nPay particular attention to ${lowestParam?lowestParam:"Air Quality"}. Improving this aspect could have a significant positive impact on the environment.`;

  return feedback;
};

// Helper function to find the parameter with the lowest value
const findLowestParameter = (state) => {
  const { aqi, waterAvailability, greenSpace } = state;

  const params = {
    "air quality": aqi,
    "water availability": waterAvailability,
    "green space": greenSpace,
  };

  // Convert state values to numerical ratings for comparison
  const ratings = {
    Poor: 1,
    Limited: 2,
    Moderate: 3,
    Balanced: 4,
    Good: 5,
    Abundant: 6,
    Improved: 7,
    "Slightly Improved": 6,
  };

  let lowestValue = Infinity;
  let lowestParam = "";

  // Find the parameter with the lowest numerical rating
  for (const param in params) {
    const value = ratings[params[param]];
    if (value < lowestValue) {
      lowestValue = value;
      lowestParam = param;
    }
  }

  return lowestParam;
};

