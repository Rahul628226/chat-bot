import React from "react";
import ReactDOM from "react-dom";
import FloatingChat from "./Components/FloatingChat.jsx";
import "./index.css";

// Create a global function for the widget
const renderWidget = (elementId, props = {}) => {
  const container = document.getElementById(elementId);
  if (!container) return;
  ReactDOM.render(<FloatingChat {...props} />, container);
};

// Attach to window for UMD usage
window.MyReactWidget = {
  renderWidget,
};

// Optional: default export for ESM
export default FloatingChat;
