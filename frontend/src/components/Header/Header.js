import React from "react";
import "./Header.css";

const Header = ({ setActiveMode, activeMode }) => {
  return (
    <div className="header">
      <button
        className={activeMode === "video" ? "active" : ""}
        onClick={() => setActiveMode("video")}
      >
        Video
      </button>
      <button
        className={activeMode === "text" ? "active" : ""}
        onClick={() => setActiveMode("text")}
      >
        Text
      </button>
      <button
        className={activeMode === "image" ? "active" : ""}
        onClick={() => setActiveMode("image")}
      >
        Image
      </button>
      <button
        className={activeMode === "audio" ? "active" : ""}
        onClick={() => setActiveMode("audio")}
      >
        Audio/Voice
      </button>
    </div>
  );
};

export default Header;
