export const scenarios = {
  airQuality: [
    {
      id: 1,
      name: "Air Quality Alert",
      description:
        "Your assistant has noticed the air quality is declining. How do you want to proceed?",
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
      id: 2,
      name: "Factory Emissions Spike",
      description:
        "A local factory has increased its emissions. What will you do?",
      option1: {
        text: "Inspect the factory (Effort increases, AQI improves)",
        effects: { effort: 15, aqi: "Improves" },
      },
      option2: {
        text: "Negotiate emission reductions with the factory (Effort decreases, AQI improves)",
        effects: { effort: -25, aqi: "Improves" },
      },
      option3: {
        text: "Conduct air quality monitoring (Effort increases slightly, AQI stays the same)",
        effects: { effort: 10, aqi: "No Change" },
      },
      option4: {
        text: "Ignore the issue (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 3,
      name: "Vehicle Emission Control",
      description:
        "Traffic pollution is a growing concern. How will you address it?",
      option1: {
        text: "Introduce low-emission zones (Effort decreases, AQI improves)",
        effects: { effort: -30, aqi: "Improves" },
      },
      option2: {
        text: "Subsidize electric vehicles (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -15, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Enhance public transport options (Effort increases, AQI improves)",
        effects: { effort: 25, aqi: "Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 4,
      name: "Wildfire Smoke Incident",
      description:
        "A nearby wildfire is affecting air quality. What actions will you take?",
      option1: {
        text: "Provide air filtration systems for residents (Effort increases, AQI improves)",
        effects: { effort: 20, aqi: "Improves" },
      },
      option2: {
        text: "Issue health warnings (Effort decreases slightly, AQI remains unchanged)",
        effects: { effort: -5, aqi: "No Change" },
      },
      option3: {
        text: "Support fire management initiatives (Effort increases significantly, AQI improves)",
        effects: { effort: 50, aqi: "Improves" },
      },
      option4: {
        text: "Ignore the situation (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 5,
      name: "Public Transport Upgrade",
      description:
        "You have an opportunity to upgrade the public transport system. What will you do?",
      option1: {
        text: "Invest in electric buses (Effort decreases, AQI improves)",
        effects: { effort: -25, aqi: "Improves" },
      },
      option2: {
        text: "Promote carpooling initiatives (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Implement bike-sharing programs (Effort increases, AQI improves)",
        effects: { effort: 30, aqi: "Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 6,
      name: "Seasonal Pollution Increase",
      description:
        "Air quality is declining due to seasonal changes. What will be your response?",
      option1: {
        text: "Increase public transport services (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option2: {
        text: "Encourage tree planting initiatives (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Conduct health impact studies (Effort increases, AQI remains the same)",
        effects: { effort: 15, aqi: "No Change" },
      },
      option4: {
        text: "Ignore the problem (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 7,
      name: "Indoor Air Quality Awareness",
      description: "Indoor air pollution is rising. How will you address it?",
      option1: {
        text: "Educate citizens about indoor air quality (Effort decreases, AQI improves)",
        effects: { effort: -15, aqi: "Improves" },
      },
      option2: {
        text: "Install air quality monitors in homes (Effort increases, AQI improves)",
        effects: { effort: 30, aqi: "Improves" },
      },
      option3: {
        text: "Provide subsidies for air purifiers (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 8,
      name: "Construction Pollution Management",
      description:
        "New construction is increasing pollution levels. What will you do?",
      option1: {
        text: "Implement construction guidelines (Effort decreases, AQI improves)",
        effects: { effort: -25, aqi: "Improves" },
      },
      option2: {
        text: "Increase green spaces around construction sites (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -15, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Conduct air quality assessments (Effort increases, AQI remains the same)",
        effects: { effort: 20, aqi: "No Change" },
      },
      option4: {
        text: "Ignore the issue (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 9,
      name: "Community Engagement for Clean Air",
      description:
        "Community interest in air quality is growing. How do you respond?",
      option1: {
        text: "Organize clean-up drives (Effort increases, AQI improves)",
        effects: { effort: 25, aqi: "Improves" },
      },
      option2: {
        text: "Form an air quality monitoring group (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option3: {
        text: "Host workshops on pollution reduction (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 10,
      name: "Air Quality Technology Innovation",
      description:
        "New technologies are available to improve air quality. What do you choose?",
      option1: {
        text: "Invest in air filtration technology (Effort decreases, AQI improves)",
        effects: { effort: -30, aqi: "Improves" },
      },
      option2: {
        text: "Adopt green building practices (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Partner with tech firms for innovation (Effort increases, AQI improves)",
        effects: { effort: 40, aqi: "Improves" },
      },
      option4: {
        text: "Ignore new technologies (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 11,
      name: "Public Health Impact from Air Quality",
      description:
        "Rising health issues linked to air quality are reported. What will you do?",
      option1: {
        text: "Implement health education programs (Effort decreases, AQI improves)",
        effects: { effort: -20, aqi: "Improves" },
      },
      option2: {
        text: "Enhance healthcare facilities (Effort increases, AQI improves)",
        effects: { effort: 30, aqi: "Improves" },
      },
      option3: {
        text: "Monitor health impacts (Effort increases slightly, AQI remains the same)",
        effects: { effort: 10, aqi: "No Change" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
    {
      id: 12,
      name: "Local Community Air Quality Programs",
      description:
        "Local communities want to improve air quality. How do you support them?",
      option1: {
        text: "Provide funding for community initiatives (Effort decreases, AQI improves)",
        effects: { effort: -25, aqi: "Improves" },
      },
      option2: {
        text: "Organize community forums (Effort decreases slightly, AQI improves a little)",
        effects: { effort: -10, aqi: "Slightly Improves" },
      },
      option3: {
        text: "Encourage local businesses to adopt clean practices (Effort increases, AQI improves)",
        effects: { effort: 30, aqi: "Improves" },
      },
      option4: {
        text: "Ignore community efforts (No change)",
        effects: { effort: 0, aqi: "Worsens" },
      },
    },
  ],
  greenSpaces: [
    {
      id: 1,
      name: "New Park Development",
      description:
        "A proposal for a new park has been put forward. How will you proceed?",
      option1: {
        text: "Allocate budget for park development (Effort decreases, Green Spaces increase)",
        effects: { effort: -30, greenSpaces: "Increase" },
      },
      option2: {
        text: "Hold community meetings for input (Effort decreases slightly, Green Spaces increase a little)",
        effects: { effort: -10, greenSpaces: "Slightly Increase" },
      },
      option3: {
        text: "Partner with local NGOs for park maintenance (Effort increases, Green Spaces improve)",
        effects: { effort: 20, greenSpaces: "Improve" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 2,
      name: "Urban Green Roof Initiative",
      description:
        "A plan for green roofs in urban areas has been proposed. What will you do?",
      option1: {
        text: "Promote incentives for green roofs (Effort decreases, Green Spaces increase)",
        effects: { effort: -20, greenSpaces: "Increase" },
      },
      option2: {
        text: "Collaborate with architects for designs (Effort decreases slightly, Green Spaces improve a little)",
        effects: { effort: -10, greenSpaces: "Slightly Increase" },
      },
      option3: {
        text: "Conduct research on benefits (Effort increases, Green Spaces improve)",
        effects: { effort: 15, greenSpaces: "Improve" },
      },
      option4: {
        text: "Ignore the initiative (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 3,
      name: "Community Garden Project",
      description:
        "The community has expressed interest in starting a garden. What will you do?",
      option1: {
        text: "Provide funding for community gardens (Effort decreases, Green Spaces increase)",
        effects: { effort: -25, greenSpaces: "Increase" },
      },
      option2: {
        text: "Organize volunteer days for planting (Effort increases, Green Spaces improve)",
        effects: { effort: 20, greenSpaces: "Improve" },
      },
      option3: {
        text: "Conduct workshops on gardening (Effort increases slightly, Green Spaces improve)",
        effects: { effort: 10, greenSpaces: "Improve" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 4,
      name: "Street Tree Planting Program",
      description:
        "A proposal for street tree planting has been put forth. What will you do?",
      option1: {
        text: "Allocate budget for street trees (Effort decreases, Green Spaces increase)",
        effects: { effort: -30, greenSpaces: "Increase" },
      },
      option2: {
        text: "Collaborate with schools for tree planting events (Effort decreases slightly, Green Spaces improve a little)",
        effects: { effort: -15, greenSpaces: "Slightly Increase" },
      },
      option3: {
        text: "Conduct studies on tree benefits (Effort increases, Green Spaces improve)",
        effects: { effort: 20, greenSpaces: "Improve" },
      },
      option4: {
        text: "Ignore the program (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 5,
      name: "Green Space Preservation",
      description:
        "A development project threatens existing green spaces. How will you respond?",
      option1: {
        text: "Implement stricter zoning laws (Effort increases, Green Spaces improve)",
        effects: { effort: 25, greenSpaces: "Improve" },
      },
      option2: {
        text: "Organize protests against development (Effort increases, Green Spaces slightly improve)",
        effects: { effort: 30, greenSpaces: "Slightly Improve" },
      },
      option3: {
        text: "Negotiate with developers for preservation (Effort decreases slightly, Green Spaces improve)",
        effects: { effort: -10, greenSpaces: "Improve" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 6,
      name: "Green Space Accessibility",
      description:
        "Accessibility to green spaces is an issue. How will you tackle it?",
      option1: {
        text: "Develop pathways to parks (Effort decreases, Green Spaces increase)",
        effects: { effort: -20, greenSpaces: "Increase" },
      },
      option2: {
        text: "Host community events in parks (Effort decreases slightly, Green Spaces improve a little)",
        effects: { effort: -10, greenSpaces: "Slightly Increase" },
      },
      option3: {
        text: "Conduct surveys on accessibility (Effort increases, Green Spaces remain the same)",
        effects: { effort: 15, greenSpaces: "No Change" },
      },
      option4: {
        text: "Ignore the issue (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 7,
      name: "Green Space Quality Improvement",
      description:
        "Current parks are under-maintained. How will you address this?",
      option1: {
        text: "Allocate funds for maintenance (Effort decreases, Green Spaces improve)",
        effects: { effort: -30, greenSpaces: "Improve" },
      },
      option2: {
        text: "Partner with local organizations for maintenance (Effort decreases slightly, Green Spaces slightly improve)",
        effects: { effort: -10, greenSpaces: "Slightly Improve" },
      },
      option3: {
        text: "Conduct assessments of park conditions (Effort increases, Green Spaces remain the same)",
        effects: { effort: 15, greenSpaces: "No Change" },
      },
      option4: {
        text: "Ignore maintenance issues (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 8,
      name: "Wildlife Habitat Protection",
      description: "A local habitat is at risk. What actions will you take?",
      option1: {
        text: "Implement habitat protection regulations (Effort increases, Green Spaces improve)",
        effects: { effort: 25, greenSpaces: "Improve" },
      },
      option2: {
        text: "Collaborate with conservation groups (Effort decreases slightly, Green Spaces improve a little)",
        effects: { effort: -10, greenSpaces: "Slightly Improve" },
      },
      option3: {
        text: "Conduct public awareness campaigns (Effort increases slightly, Green Spaces remain the same)",
        effects: { effort: 10, greenSpaces: "No Change" },
      },
      option4: {
        text: "Ignore the situation (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 9,
      name: "Urban Tree Canopy Expansion",
      description:
        "There's a proposal to expand the urban tree canopy. What will you do?",
      option1: {
        text: "Allocate funds for tree planting (Effort decreases, Green Spaces increase)",
        effects: { effort: -30, greenSpaces: "Increase" },
      },
      option2: {
        text: "Partner with local schools for planting initiatives (Effort decreases slightly, Green Spaces slightly improve)",
        effects: { effort: -10, greenSpaces: "Slightly Improve" },
      },
      option3: {
        text: "Research the benefits of urban trees (Effort increases, Green Spaces remain the same)",
        effects: { effort: 20, greenSpaces: "No Change" },
      },
      option4: {
        text: "Ignore the proposal (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 10,
      name: "Climate Change and Green Spaces",
      description:
        "Climate change threatens existing green spaces. How do you respond?",
      option1: {
        text: "Develop climate resilience strategies (Effort increases, Green Spaces improve)",
        effects: { effort: 25, greenSpaces: "Improve" },
      },
      option2: {
        text: "Raise awareness on climate impacts (Effort decreases slightly, Green Spaces slightly improve)",
        effects: { effort: -10, greenSpaces: "Slightly Improve" },
      },
      option3: {
        text: "Monitor green space conditions (Effort increases slightly, Green Spaces remain the same)",
        effects: { effort: 10, greenSpaces: "No Change" },
      },
      option4: {
        text: "Ignore the issue (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
    {
      id: 11,
      name: "Community Engagement in Green Spaces",
      description:
        "Community engagement is low in local parks. What will you do?",
      option1: {
        text: "Host events to attract visitors (Effort decreases, Green Spaces increase)",
        effects: { effort: -20, greenSpaces: "Increase" },
      },
      option2: {
        text: "Survey community needs for parks (Effort decreases slightly, Green Spaces improve a little)",
        effects: { effort: -10, greenSpaces: "Slightly Increase" },
      },
      option3: {
        text: "Collaborate with local groups for activities (Effort increases, Green Spaces improve)",
        effects: { effort: 20, greenSpaces: "Improve" },
      },
      option4: {
        text: "Ignore community input (No change)",
        effects: { effort: 0, greenSpaces: "Worsens" },
      },
    },
  ],
  waterAvailability: [
    {
      id: 1,
      name: "Water Pollution Incident",
      description:
        "A factory has been found polluting a nearby river. What will you do?",
      option1: {
        text: "Initiate a cleanup operation (Effort increases, Water quality improves)",
        effects: { effort: 30, waterQuality: "Improve" },
      },
      option2: {
        text: "Fine the factory for violations (Effort decreases slightly, Water quality slightly improves)",
        effects: { effort: -10, waterQuality: "Slightly Improve" },
      },
      option3: {
        text: "Conduct a public awareness campaign (Effort increases slightly, Water quality remains the same)",
        effects: { effort: 15, waterQuality: "No Change" },
      },
      option4: {
        text: "Ignore the incident (No change)",
        effects: { effort: 0, waterQuality: "Worsens" },
      },
    },
    {
      id: 2,
      name: "Drought Response",
      description: "The region is facing a severe drought. What will you do?",
      option1: {
        text: "Implement water conservation measures (Effort increases, Water supply improves)",
        effects: { effort: 25, waterSupply: "Improve" },
      },
      option2: {
        text: "Encourage community gardens (Effort decreases slightly, Water supply slightly improves)",
        effects: { effort: -10, waterSupply: "Slightly Improve" },
      },
      option3: {
        text: "Invest in rainwater harvesting (Effort increases, Water supply remains the same)",
        effects: { effort: 20, waterSupply: "No Change" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, waterSupply: "Worsens" },
      },
    },
    {
      id: 3,
      name: "Invasive Aquatic Species",
      description:
        "Invasive species are threatening local water bodies. What will you do?",
      option1: {
        text: "Launch an eradication program (Effort increases, Water ecosystems improve)",
        effects: { effort: 30, waterEcosystems: "Improve" },
      },
      option2: {
        text: "Raise public awareness about invasive species (Effort decreases slightly, Water ecosystems slightly improve)",
        effects: { effort: -10, waterEcosystems: "Slightly Improve" },
      },
      option3: {
        text: "Conduct research on the impact of invasives (Effort increases, Water ecosystems remain the same)",
        effects: { effort: 20, waterEcosystems: "No Change" },
      },
      option4: {
        text: "Ignore the issue (No change)",
        effects: { effort: 0, waterEcosystems: "Worsens" },
      },
    },
    {
      id: 4,
      name: "Stormwater Management",
      description:
        "Heavy rains are causing flooding due to poor stormwater management. What will you do?",
      option1: {
        text: "Upgrade drainage systems (Effort increases, Flooding risk decreases)",
        effects: { effort: 40, floodingRisk: "Decrease" },
      },
      option2: {
        text: "Promote green roofs and permeable pavements (Effort decreases slightly, Flooding risk slightly decreases)",
        effects: { effort: -10, floodingRisk: "Slightly Decrease" },
      },
      option3: {
        text: "Conduct a community cleanup of drainage areas (Effort increases, Flooding risk remains the same)",
        effects: { effort: 15, floodingRisk: "No Change" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, floodingRisk: "Worsens" },
      },
    },
    {
      id: 5,
      name: "Water Quality Monitoring",
      description:
        "Concerns have been raised about water quality in local lakes. How will you respond?",
      option1: {
        text: "Implement regular water quality testing (Effort increases, Water quality improves)",
        effects: { effort: 30, waterQuality: "Improve" },
      },
      option2: {
        text: "Increase public access to water quality reports (Effort decreases slightly, Water quality slightly improves)",
        effects: { effort: -10, waterQuality: "Slightly Improve" },
      },
      option3: {
        text: "Partner with local universities for research (Effort increases, Water quality remains the same)",
        effects: { effort: 25, waterQuality: "No Change" },
      },
      option4: {
        text: "Ignore the concerns (No change)",
        effects: { effort: 0, waterQuality: "Worsens" },
      },
    },
    {
      id: 6,
      name: "Over-extraction of Water Resources",
      description:
        "Local farmers are over-extracting water for irrigation. What will you do?",
      option1: {
        text: "Promote sustainable irrigation practices (Effort increases, Water resources stabilize)",
        effects: { effort: 35, waterResources: "Stabilize" },
      },
      option2: {
        text: "Implement water usage regulations (Effort decreases slightly, Water resources slightly stabilize)",
        effects: { effort: -10, waterResources: "Slightly Stabilize" },
      },
      option3: {
        text: "Offer incentives for water conservation (Effort increases, Water resources remain the same)",
        effects: { effort: 20, waterResources: "No Change" },
      },
      option4: {
        text: "Take no action (No change)",
        effects: { effort: 0, waterResources: "Worsens" },
      },
    },
    {
      id: 7,
      name: "Water Supply Infrastructure",
      description:
        "The existing water supply infrastructure is aging. How will you address this?",
      option1: {
        text: "Allocate funds for infrastructure upgrades (Effort increases, Water supply improves)",
        effects: { effort: 30, waterSupply: "Improve" },
      },
      option2: {
        text: "Conduct an audit of existing infrastructure (Effort decreases slightly, Water supply slightly improves)",
        effects: { effort: -10, waterSupply: "Slightly Improve" },
      },
      option3: {
        text: "Engage the community in maintenance efforts (Effort increases, Water supply remains the same)",
        effects: { effort: 25, waterSupply: "No Change" },
      },
      option4: {
        text: "Ignore the aging infrastructure (No change)",
        effects: { effort: 0, waterSupply: "Worsens" },
      },
    },
    {
      id: 8,
      name: "Access to Clean Drinking Water",
      description:
        "Many community members lack access to clean drinking water. What will you do?",
      option1: {
        text: "Install community water filtration systems (Effort increases, Access to clean water improves)",
        effects: { effort: 40, cleanWaterAccess: "Improve" },
      },
      option2: {
        text: "Provide education on water safety (Effort decreases slightly, Access to clean water slightly improves)",
        effects: { effort: -10, cleanWaterAccess: "Slightly Improve" },
      },
      option3: {
        text: "Work with NGOs to distribute bottled water (Effort increases, Access to clean water remains the same)",
        effects: { effort: 25, cleanWaterAccess: "No Change" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, cleanWaterAccess: "Worsens" },
      },
    },
    {
      id: 9,
      name: "Agricultural Water Use",
      description:
        "Agricultural water use is impacting local ecosystems. What will you do?",
      option1: {
        text: "Promote drip irrigation (Effort increases, Ecosystems improve)",
        effects: { effort: 30, ecosystems: "Improve" },
      },
      option2: {
        text: "Educate farmers on water-efficient practices (Effort decreases slightly, Ecosystems slightly improve)",
        effects: { effort: -10, ecosystems: "Slightly Improve" },
      },
      option3: {
        text: "Conduct research on the impacts of agriculture on water (Effort increases, Ecosystems remain the same)",
        effects: { effort: 20, ecosystems: "No Change" },
      },
      option4: {
        text: "Ignore agricultural practices (No change)",
        effects: { effort: 0, ecosystems: "Worsens" },
      },
    },
    {
      id: 10,
      name: "Water Conservation Campaign",
      description:
        "There is a need for better water conservation awareness. What will you do?",
      option1: {
        text: "Launch a water conservation campaign (Effort increases, Conservation awareness improves)",
        effects: { effort: 25, conservationAwareness: "Improve" },
      },
      option2: {
        text: "Engage schools in conservation education (Effort decreases slightly, Conservation awareness slightly improves)",
        effects: { effort: -10, conservationAwareness: "Slightly Improve" },
      },
      option3: {
        text: "Create an online resource for water conservation tips (Effort increases, Conservation awareness remains the same)",
        effects: { effort: 20, conservationAwareness: "No Change" },
      },
      option4: {
        text: "Do nothing (No change)",
        effects: { effort: 0, conservationAwareness: "Worsens" },
      },
    },
    {
      id: 11,
      name: "Aquifer Depletion",
      description:
        "Local aquifers are being depleted faster than they can recharge. What will you do?",
      option1: {
        text: "Implement restrictions on water extraction (Effort increases, Aquifer levels stabilize)",
        effects: { effort: 30, aquiferLevels: "Stabilize" },
      },
      option2: {
        text: "Promote water-saving technologies (Effort decreases slightly, Aquifer levels slightly stabilize)",
        effects: { effort: -10, aquiferLevels: "Slightly Stabilize" },
      },
      option3: {
        text: "Conduct studies on aquifer health (Effort increases, Aquifer levels remain the same)",
        effects: { effort: 25, aquiferLevels: "No Change" },
      },
      option4: {
        text: "Take no action (No change)",
        effects: { effort: 0, aquiferLevels: "Worsens" },
      },
    },
    {
      id: 12,
      name: "Water Rights Dispute",
      description:
        "There is a dispute over water rights between neighboring communities. What will you do?",
      option1: {
        text: "Facilitate a mediation process (Effort increases, Relationships improve)",
        effects: { effort: 35, relationships: "Improve" },
      },
      option2: {
        text: "Propose a fair water allocation plan (Effort decreases slightly, Relationships slightly improve)",
        effects: { effort: -10, relationships: "Slightly Improve" },
      },
      option3: {
        text: "Encourage community discussions (Effort increases, Relationships remain the same)",
        effects: { effort: 20, relationships: "No Change" },
      },
      option4: {
        text: "Ignore the dispute (No change)",
        effects: { effort: 0, relationships: "Worsens" },
      },
    },
  ],
};
