import React, { useEffect, useRef } from "react";
import "./ChatWindow.css";

const ChatWindow = ({ messages }) => {
  const chatRef = useRef(null);

  // Auto-scroll with smooth effect
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chat-window" ref={chatRef}>
      {messages.length === 0 ? (
        <div className="no-messages">No messages yet. Start typing below!</div>
      ) : (
        messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.sender === "user" ? "user-msg" : "ai-msg"}`}>
            <div className="message">
              <span className="message-text">{msg.text}</span>
              <span className="timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatWindow;
