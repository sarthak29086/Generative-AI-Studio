import React, { useState } from "react";
import "./Sidebar.css";

/**
 * Sidebar Component
 * 
 * Features:
 * 1. Collapsible sidebar with toggle button
 * 2. History list with click-to-select
 * 3. Responsive design (multiple breakpoints)
 * 4. Extra transitions & animations for a modern feel
 * 
 * Props:
 * @param {Array}   history       - The array of history items to display
 * @param {Function} setActiveItem - Function to set the currently active item
 */
const Sidebar = ({ history, setActiveItem }) => {
  // State to manage whether the sidebar is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggles the collapsed state
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* 
        Toggle Button: 
        Shows either << or >> depending on collapsed state.
        We also add a custom icon for style.
      */}
      <div className="toggle-btn" onClick={handleToggle}>
        {isCollapsed ? ">>" : "<<"}
      </div>

      {/* Sidebar Title */}
      <h2 className="sidebar-title">History</h2>

      {/* Container for the entire history list */}
      <div className="history-container">
        {history.length === 0 ? (
          <div className="no-history">No history yet</div>
        ) : (
          <ul className="history-list">
            {history.map((item, index) => (
              <li
                key={index}
                className="history-item"
                onClick={() => setActiveItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
