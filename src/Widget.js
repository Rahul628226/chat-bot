import React from "react";
import ReactDOM from "react-dom";
import FloatingChat from "./Components/FloatingChat.jsx";
import "./index.css";


export const renderWidget = (elementId) => {
  const container = document.getElementById(elementId);
  if (!container) return;
  ReactDOM.render(<FloatingChat />, container);
};

export default FloatingChat;