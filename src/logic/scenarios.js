export const scenarios = {
  airQuality: [
    {
      id: 1,
      name: "Air Quality Alert",
      description:
        "Your assistant has noticed the air is getting worse. How do you want to proceed?",
      option1: {
        text: "Invest in renewable energy sources (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option2: {
        text: "Implement stricter pollution regulations (Effort decreases significantly, AQI improves)",
        effects: { effort: -40, aqi: "Improves" },
      },
      option3: {
        text: "Launch a public awareness campaign (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 6,
      name: "Air Quality Alert",
      description:
        "Your assistant has noticed the air is getting worse. How do you want to proceed?",
      option1: {
        text: "Invest in renewable energy sources (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option2: {
        text: "Implement stricter pollution regulations (Effort decreases significantly, AQI improves)",
        effects: { effort: -40, aqi: "Improves" },
      },
      option3: {
        text: "Launch a public awareness campaign (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 7,
      name: "Air Quality Alert",
      description:
        "Your assistant has noticed the air is getting worse. How do you want to proceed?",
      option1: {
        text: "Invest in renewable energy sources (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option2: {
        text: "Implement stricter pollution regulations (Effort decreases significantly, AQI improves)",
        effects: { effort: -40, aqi: "Improves" },
      },
      option3: {
        text: "Launch a public awareness campaign (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    // Add more air quality-related scenarios as needed
  ],
  waterAvailability: [
    {
      id: 2,
      name: "Water Scarcity Warning",
      description: "Water resources are running low. What’s your next step?",
      option1: {
        text: "Invest in desalination plants (Effort decreases, Water improves)",
        effects: { effort: -30, waterAvailability: "Improves" },
      },
      option2: {
        text: "Implement water conservation policies (Effort decreases, Water improves)",
        effects: { effort: -20, waterAvailability: "Improves" },
      },
      option3: {
        text: "Start a water recycling initiative (Effort decreases slightly, Water improves slightly)",
        effects: { effort: -10, waterAvailability: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, waterAvailability: "Worsens" },
      },
    },
    {
      id: 8,
      name: "Water Scarcity Warning",
      description: "Water resources are running low. What’s your next step?",
      option1: {
        text: "Invest in desalination plants (Effort decreases, Water improves)",
        effects: { effort: -30, waterAvailability: "Improves" },
      },
      option2: {
        text: "Implement water conservation policies (Effort decreases, Water improves)",
        effects: { effort: -20, waterAvailability: "Improves" },
      },
      option3: {
        text: "Start a water recycling initiative (Effort decreases slightly, Water improves slightly)",
        effects: { effort: -10, waterAvailability: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, waterAvailability: "Worsens" },
      },
    },
    {
      id: 9,
      name: "Water Scarcity Warning",
      description: "Water resources are running low. What’s your next step?",
      option1: {
        text: "Invest in desalination plants (Effort decreases, Water improves)",
        effects: { effort: -30, waterAvailability: "Improves" },
      },
      option2: {
        text: "Implement water conservation policies (Effort decreases, Water improves)",
        effects: { effort: -20, waterAvailability: "Improves" },
      },
      option3: {
        text: "Start a water recycling initiative (Effort decreases slightly, Water improves slightly)",
        effects: { effort: -10, waterAvailability: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, waterAvailability: "Worsens" },
      },
    },
    // Add more water-related scenarios as needed
  ],
};
