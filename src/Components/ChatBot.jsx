import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, X, MoreVertical, Clock } from 'lucide-react';
import faqData from '../data/faq.json';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);
  const initialized = useRef(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Run once to add welcome messages
  useEffect(() => {
    if (!initialized.current) {
      initializeChat();
      initialized.current = true;
    }
  }, []);

  const initializeChat = () => {
    // Clear existing messages first
    setMessages([]);
    
    setTimeout(() => {
      addBotMessage("Welcome to Wall Street Jr Investments! 👋");
      setTimeout(() => {
        addBotMessage("How can I assist you today?");
        setTimeout(() => {
          addBotMessage("", true, ['About Us', 'Our Services', 'Contact Us']);
        }, 1000);
      }, 1000);
    }, 500);
  };

  const refreshChat = () => {
    initialized.current = false;
    setMessages([]);
    setInput('');
    setIsTyping(false);
    setMenuOpen(false);
    
    // Reinitialize chat after a brief delay
    setTimeout(() => {
      initializeChat();
      initialized.current = true;
    }, 100);
  };

  const addBotMessage = (content, isOption = false, options) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        isOption,
        options
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (content) => {
    const newMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option) => {
    addUserMessage(option);

    if (option === 'About Us') {
      setTimeout(() => addBotMessage(faqData.aboutUs.answer), 500);
    } else if (option === 'Contact Us') {
      setTimeout(() => addBotMessage(faqData.contactUs.answer), 500);
    } else if (option === 'Our Services') {
      setTimeout(() => {
        addBotMessage("Here are our investment services:");
        setTimeout(() => {
          addBotMessage("", true, [
            'Portfolio Management',
            'Financial Planning',
            'Investment Consulting',
            'Retirement Planning',
            'Wealth Management'
          ]);
        }, 800);
      }, 500);
    } else {
      const serviceKey = Object.keys(faqData.services).find(
        key => faqData.services[key].question === option
      );
      if (serviceKey) {
        setTimeout(() => {
          addBotMessage(faqData.services[serviceKey].answer);
        }, 500);
      }
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    addUserMessage(input);
    const userQuery = input.toLowerCase();

    const matchedFaq = faqData.faq.find(item =>
      item.question.toLowerCase().includes(userQuery) ||
      userQuery.includes(item.question.toLowerCase()) ||
      item.answer.toLowerCase().includes(userQuery)
    );

    setTimeout(() => {
      if (matchedFaq) {
        addBotMessage(matchedFaq.answer);
      } else {
        addBotMessage(
          "I'm sorry, I couldn't find information about that. Please try rephrasing your question or select from the available options. You can also contact our team directly for personalized assistance."
        );
      }
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 py-2 px-2">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md rounded-lg relative">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold text-base">JUNIOR</h2>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Usual reply time: 2 to 3 Minutes
            </p>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* 3-dot menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 hover:bg-blue-700 rounded-full"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-gray-800 z-50">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                  <span>💬</span> Start Live Chat
                </button>
                <button 
                  onClick={refreshChat}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  <span>🔄</span> Refresh Chat
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                  <span>📱</span> Transfer to WhatsApp
                </button>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1 hover:bg-blue-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'bot'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-400 text-white'
            }`}>
              {message.type === 'bot' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>

            <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'text-right' : ''}`}>
              {message.content && (
                <div className={`rounded-2xl px-4 py-2 ${
                  message.type === 'bot'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'bg-blue-600 text-white'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              )}

              {message.isOption && message.options && (
                <div className="mt-2 space-y-2">
                  {message.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleOptionClick(option)}
                      className="block w-full text-left border border-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white ">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-gray-300 focus:ring-blue-600"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;