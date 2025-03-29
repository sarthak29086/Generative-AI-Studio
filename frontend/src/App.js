import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PromptInput from "./components/PromptInput/PromptInput";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import TemplateGallery from "./components/TemplateGallery/TemplateGallery"; // ✅ Added

function App() {
  const [activeMode, setActiveMode] = useState("text");
  const [history, setHistory] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState(""); // ✅ Store user input

  const handleSendPrompt = (prompt) => {
    if (prompt.trim()) {
      const newMessage = { sender: "user", text: prompt };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setHistory((prevHistory) => [prompt, ...prevHistory]);
      setInputValue(""); // ✅ Clear input after sending

      setTimeout(() => {
        const aiResponse = { sender: "ai", text: "This is an AI-generated response!" };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  const handleTemplateSelect = (templateText) => {
    setInputValue(templateText); // ✅ Auto-fill prompt input
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar history={history} setActiveItem={setActiveItem} />
        <div className="main-content">
          <Header setActiveMode={setActiveMode} />
          <Routes>
            <Route path="/" element={<Home activeMode={activeMode} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <TemplateGallery onTemplateSelect={handleTemplateSelect} /> {/* ✅ Added */}
          <ChatWindow messages={messages} />
          <PromptInput onSend={handleSendPrompt} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      </div>
    </Router>
  );
}

export default App;
