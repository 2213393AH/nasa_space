Here’s a README template for your project:

---

# **Environment Sustainability Game**

### _Made by Team AstroNex_

_Hackathon: NASA Space Apps 2024, Noida_

---

## **Overview**

This project is an interactive web application built to educate users on environmental sustainability by simulating decision-making around key environmental parameters: **air quality**, **water availability**, and **green space**. Players are tasked with making critical decisions that affect these parameters over time, learning the consequences of their actions as they try to maintain balance across these environmental factors.

---

## **Working**

### **Objective**

Players are given a finite amount of effort (starting at 100 points) and must allocate it wisely by choosing from various scenarios presented in three key domains:

- **Air Quality**
- **Water Availability**
- **Green Space**

Each scenario presents a real-world challenge (e.g., water scarcity, air pollution) with four possible decisions, each affecting the effort points and the parameters in different ways. The player’s goal is to make sustainable decisions that balance environmental parameters and maximize the overall score.

### **Game Flow**

1. **Starting Point**:  
   The game starts with moderate air quality, balanced water availability, and limited green space. Players are presented with their first scenario from a particular domain (e.g., air quality).

2. **Decision Making**:  
   The player selects an option from the scenario, and the game's logic calculates the effects on the effort points and environmental parameters.

3. **Progression**:  
   After each decision, the game presents another scenario, potentially from the same or another domain. The game checks if the player has exhausted all scenarios in a domain and, if so, switches to another available domain. If all domains are exhausted or effort points run out, the game ends.

4. **End of Game**:  
   The game calculates a score based on the final state of air quality, water availability, and green space. Players receive feedback highlighting their performance, with particular emphasis on the environmental parameter they neglected the most.

### **Feedback Mechanism**

At the end of the game, the user receives feedback based on their score. The feedback also highlights the parameter (air quality, water availability, or green space) that performed the worst, providing suggestions for improvement.

### **Technologies Used**

1. **React.js**:  
   The game is built using React.js, providing a responsive user interface and efficient state management through the `useState` and `useEffect` hooks.
2. **JavaScript**:  
   JavaScript powers the game logic, calculating effort, applying decision effects, and managing scenario progression.
3. **Vercel**:  
   The project is deployed on Vercel, ensuring smooth deployment and hosting for the application.

4. **CSS & Bootstrap**:  
   The UI design includes modern styling, with responsive layouts enhanced by CSS and Bootstrap for ease of use and a polished appearance.

---

## **Features**

- **Dynamic Decision-Making**:  
   Players make real-world inspired decisions that impact the game's environment parameters in real-time.
- **Scenario Switching**:  
   The game automatically switches domains when scenarios in a current domain are exhausted, creating variety and ensuring a holistic environmental focus.
- **Feedback Mechanism**:  
   At the end of the game, players receive constructive feedback based on their decisions, providing them with insights into how their choices impacted the environment.

- **Educational & Fun**:  
   This game serves as a learning tool to teach players about the environmental consequences of their decisions while keeping them engaged in a fun simulation.

---

## **Thought Process**

### **Problem Identification**

The environment is a complex system where air quality, water availability, and green spaces are deeply interconnected. In today's world, sustainable decision-making is key to preserving the planet for future generations. With this in mind, we wanted to create a game that would simulate the balancing act required to manage these interconnected environmental factors.

### **Design & Planning**

We aimed to design scenarios that mirror real-life environmental challenges. Each scenario presents the player with decisions that have far-reaching consequences, much like in the real world. By providing choices that affect multiple parameters, the game highlights the importance of holistic thinking and planning.

### **Development Approach**

We focused on a simple but effective architecture where each decision impacts the state of the game. This state is managed using React's context API, allowing us to pass information across different components and ensuring smooth gameplay.

---

## **How to Run the Project**

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd environment-sustainability-game
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

4. **Build for Production**:
   To create an optimized production build:
   ```bash
   npm run build
   ```

---

## **Deployment**

The project is hosted on Vercel. If you'd like to deploy it yourself, follow these steps:

1. Push the project to a Git repository (GitHub, GitLab, etc.).
2. Go to [Vercel](https://vercel.com/), create an account, and import your repository.
3. Configure the settings and deploy your app.

---

## **Team AstroNex**

We are **Team AstroNex**, participating in **NASA Space Apps 2024 Hackathon, Noida**. Our goal is to create solutions that raise awareness about environmental sustainability, and this game is our attempt to do just that!
