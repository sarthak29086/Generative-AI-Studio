import React, { useState } from "react";
import { Send } from "lucide-react"; // Modern icon
import "./PromptInput.css";

const PromptInput = ({ onSend, inputValue, setInputValue }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue(""); // Clear input after sending
    }
  };

  return (
    <div className={`prompt-input-container ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        className="prompt-input"
        placeholder="Type your creative prompt here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className="send-button" onClick={handleSend}>
        <Send size={20} /> {/* Icon for a modern look */}
      </button>
    </div>
  );
};

export default PromptInput;
