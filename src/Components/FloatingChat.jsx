import React, { useState, useRef } from "react";
import { MessageCircle } from "lucide-react";
import ChatBot from "./ChatBot.jsx";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({ width: 420, height: 600 });
  const [position, setPosition] = useState({ bottom: 24, right: 24 });

  const chatRef = useRef(null);
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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

    const dx = startPos.current.x - e.clientX; // invert for top-left
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
      {/* Floating Icon */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex items-center z-50">
          {/* Dialogue Bubble */}
          {/* Dialogue Bubble */}
          <div
            className="relative inline-block max-w-[230px] bg-white text-black font-semibold text-[16px] p-3 mb-2 mr-2 shadow-[0_0_3px_1px_rgba(145,145,145,0.3)] cursor-pointer"
            style={{
              borderRadius: "20px 20px 3px 20px",
            }}
          >
            May I help you?
          </div>


          {/* Bot Avatar */}
          <button
            onClick={toggleChat}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-lg bg-[#344b73] cursor-pointer overflow-hidden flex items-center justify-center p-0"
          >
            <img
              src="https://chat-bot-sooty-phi.vercel.app/bot.png"
              alt="Bot"
              className="w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 object-contain rounded-full"
            />
          </button>

        </div>

      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-6 right-6 z-50 shadow-2xl rounded-lg overflow-hidden bg-white"
          style={{
            width: size.width,
            height: size.height,
            minWidth: 350,
            minHeight: 400,
            maxWidth: 800,
            maxHeight: "90vh",
          }}
        >
          {/* Resize handle at TOP-LEFT (invisible area for drag) */}
          <div
            onMouseDown={handleMouseDown}
            className="absolute top-0 left-0 w-4 h-4 cursor-nwse-resize"
          />

          <ChatBot onClose={toggleChat} />
        </div>
      )}
    </>
  );
};

export default FloatingChat;
