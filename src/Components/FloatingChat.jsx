import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatBot from "./ChatBot";
import { Button } from "./ui/Button";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Icon */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg z-50 sm:h-16 sm:w-16"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 shadow-2xl rounded-lg overflow-hidden bg-white resize group"
          style={{
            width: "min(400px, calc(100vw - 3rem))",
            height: "min(70vh, calc(100vh - 3rem))",
            minWidth: "min(350px, calc(100vw - 3rem))",
            minHeight: "min(400px, calc(100vh - 3rem))",
            maxWidth: "min(800px, calc(100vw - 3rem))",
            maxHeight: "min(90vh, calc(100vh - 3rem))",
            resize: "both",
          }}
        >
          <ChatBot onClose={toggleChat} />
        </div>
      )}
    </>
  );
};

export default FloatingChat;
