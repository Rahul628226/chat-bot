import React, { useState, useRef, useEffect } from "react";
import ChatBot from "./ChatBot.jsx";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({ width: 420, height: 600 });
  const chatRef = useRef(null);
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      setSize({ width: screenWidth - 38, height: 550 });
    }
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMouseDown = (e) => {
    isResizing.current = true;
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;

    const dx = startPos.current.x - e.clientX;
    const dy = startPos.current.y - e.clientY;

    const newWidth = Math.max(350, startPos.current.width + dx);
    const newHeight = Math.max(400, startPos.current.height + dy);

    setSize({ width: newWidth, height: newHeight });
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      {/* CSS inside the component */}
      <style>{`
        .botchat-floating-icon {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          z-index: 50;
        }
        .botchat-bubble {
          position: relative;
          display: inline-block;
          max-width: 230px;
          background-color: white;
          color: black;
          font-weight: 600;
          font-size: 16px;
          padding: 12px;
          margin-bottom: 8px;
          margin-right: 8px;
          box-shadow: 0 0 3px 1px rgba(145, 145, 145, 0.3);
          border-radius: 20px 20px 3px 20px;
          cursor: pointer;
        }
        .botchat-avatar-btn {
          height: 56px;
          width: 56px;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          background-color: #344b73;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .botchat-avatar-img {
          width: 75%;
          height: 75%;
          object-fit: contain;
          border-radius: 50%;
        }
        .botchat-window {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
          background-color: #ffffffff;
          border-radius: 12px;
          overflow: hidden;
          background-color: white;
          min-width: 350px;
          min-height: 400px;
          max-width: 800px;
          max-height: 90vh;
        }
        .botchat-resize-handle {
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          cursor: nwse-resize;
          
        }
      `}</style>

      {/* Floating Icon */}
      {!isOpen && (
        <div className="botchat-floating-icon">
          <div className="botchat-bubble">May I help you?</div>

          <button onClick={toggleChat} className="botchat-avatar-btn">
            <img
              src="https://chat-bot-sooty-phi.vercel.app/bot.png"
              alt="Bot"
              className="botchat-avatar-img"
            />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="botchat-window"
          style={{ width: size.width, height: size.height }}
        >
          <div onMouseDown={handleMouseDown} className="botchat-resize-handle" />
          <ChatBot onClose={toggleChat} />
        </div>
      )}
    </>
  );
};

export default FloatingChat;
