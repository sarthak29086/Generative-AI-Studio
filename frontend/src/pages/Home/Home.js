import React from "react";
import "./Home.css";

const Home = ({ activeMode }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">🚀 Generative AI Creation Studio</h1>
      <p className="home-subtitle">Unleash your creativity with AI</p>
      
      <div className="mode-container">
        <p className="mode-text">
          <strong>Current Mode:</strong> <span className="active-mode">{activeMode}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
