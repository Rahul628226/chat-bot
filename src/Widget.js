import React from "react";
import ReactDOM from "react-dom/client";
import FloatingChat from "./Components/FloatingChat.jsx";
import stylesText from "./index.css?inline";

export const renderWidget = (elementId) => {
  const container = document.getElementById(elementId);
  if (!container) return;

  const shadowHost = document.createElement('div');
  shadowHost.id = 'chat-widget-shadow-host';
  container.appendChild(shadowHost);

  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

  const styleSheet = document.createElement('style');
  styleSheet.textContent = stylesText;
  shadowRoot.appendChild(styleSheet);

  const shadowContainer = document.createElement('div');
  shadowRoot.appendChild(shadowContainer);

  const root = ReactDOM.createRoot(shadowContainer);
  root.render(<FloatingChat />);
};

export default FloatingChat;
