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

    const root = ReactDOM.createRoot(container);
    root.render(<FloatingChat />);
}

// Expose globally
window.initChatWidget = initChatWidget;
