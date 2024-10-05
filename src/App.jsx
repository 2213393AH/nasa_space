import React from "react";
import "./App.css";
import { GamePanel } from "./components/GamePanel";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { GameContextProvider } from "./context/GameContext";

function App() {
  return (
    <GameContextProvider>
      <div className="app-container">
        <Header />
        <div className="game-layout">
          <Sidebar />
          <GamePanel />
        </div>
        <Footer />
      </div>
    </GameContextProvider>
  );
}

export default App;
