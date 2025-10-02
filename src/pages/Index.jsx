import React from 'react';
import FloatingChat from '../Components/FloatingChat';

const Index = () => {
  return (
    <>
      <style>{`
        .botchat-container {
          height: 100vh;
          background-color: #f0f2f5; /* replace bg-chat-background color */
        }
      `}</style>

      <div className="botchat-container">
        <FloatingChat />
      </div>
    </>
  );
};

export default Index;
