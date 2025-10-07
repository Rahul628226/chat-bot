import React from 'react';
import ReactDOM from 'react-dom/client';
import FloatingChat from './Components/FloatingChat';

function initChatWidget({ containerId = 'chat-widget-container' } = {}) {
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
    }

    const shadowHost = document.createElement('div');
    shadowHost.id = 'chat-widget-shadow-host';
    container.appendChild(shadowHost);

    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

    const shadowContainer = document.createElement('div');
    shadowRoot.appendChild(shadowContainer);

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        * {
            box-sizing: border-box;
        }
    `;
    shadowRoot.appendChild(styleSheet);

    const root = ReactDOM.createRoot(shadowContainer);
    root.render(<FloatingChat />);
}

window.initChatWidget = initChatWidget;
