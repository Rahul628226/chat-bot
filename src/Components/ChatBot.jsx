import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, X, MoreVertical, Clock } from 'lucide-react';
import faqData from '../data/faq.json';
import { Input } from './ui/Input.jsx';
import { FaWhatsapp } from "react-icons/fa";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);
  const initialized = useRef(false);



const formatMessageContent = (text) => {
  if (!text) return null;

  // Split by comma and trim each part, join with <br> for line breaks
  let formatted = text
    .split('\n')
    .map(part => part.trim())
    .join('<br>');

  // Regex patterns
  const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const phonePattern = /(\+?\d[\d\s-]{7,}\d)/g;

  // Replace URLs
  formatted = formatted.replace(urlPattern, (url) => {
    const href = url.startsWith("http") ? url : `https://${url}`;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline block">${url}</a>`;
  });

  // Replace Emails
  formatted = formatted.replace(emailPattern, (email) => {
    return `<a href="mailto:${email}" class="text-blue-600 underline block">${email}</a>`;
  });

  // Replace Phone Numbers
  formatted = formatted.replace(phonePattern, (phone) => {
    return `<a href="tel:${phone.replace(/\s|-/g, '')}" class="text-blue-600 underline block">${phone}</a>`;
  });

  return formatted;
};





  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!initialized.current) {
      initializeChat();
      initialized.current = true;
    }
  }, []);

  const initializeChat = () => {
    setMessages([]);
    setTimeout(() => {
      addBotMessage("Welcome to Wall Street Jr Investments! 👋");
      setTimeout(() => {
        addBotMessage("How can I assist you today?");
        setTimeout(() => {
          addBotMessage("", true, ['About Us', 'Our Services', 'Contact Us'], "Please choose an option:");
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
    setTimeout(() => {
      initializeChat();
      initialized.current = true;
    }, 100);
  };

  const addBotMessage = (content, isOption = false, options, optionHeader = null) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        isOption,
        options,
        optionHeader
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
            'Investment Management',
            'Capital Code',
            'Risk Management / Asset Restructuring',
          ], "Choose a service to learn more:");
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

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    addUserMessage(input);
    const userQuery = input;

    try {
      const res = await fetch("/api/faqs/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userQuery }),
      });
      const data = await res.json();
      setTimeout(() => {
        if (data.success && data.response) {
          addBotMessage(data.response);
        } else {
          addBotMessage(
            "I'm sorry, I couldn't find information about that. Please try rephrasing your question or select from the available options. You can also contact our team directly for personalized assistance."
          );
        }
      }, 500);
    } catch (error) {
      console.error("Error fetching FAQ:", error);
      addBotMessage("Oops! Something went wrong. Please try again later.");
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 py-2 px-2">
      {/* Chat Header */}
      <div className="bg-[#344b73] text-white px-4 py-3 flex items-center justify-between shadow-md rounded-lg relative">
        <div className="flex items-left gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img
              src="https://chat-bot-sooty-phi.vercel.app/bot.png"
              alt="Bot"
              className="w-8 h-8 object-contain rounded-full"
            />

          </div>
          <div>
            <h2 className="font-semibold text-base text-left">JUNIOR</h2>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Usual reply time: 2 to 3 Minutes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 cursor-pointer hover:border border-white rounded-full"
            >
              <MoreVertical className="w-5 h-5 cursor-pointer" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 text-sm  bg-white rounded-lg shadow-lg text-gray-800 z-50">
                <button className="disabled flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg">
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    💬
                  </span>
                  Start Live Chat
                </button>
                <button
                  onClick={refreshChat}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg"
                >
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    🔄
                  </span>
                  Refresh Chat
                </button>
                <button className="disabled flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 w-full text-left rounded-lg">
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    <FaWhatsapp className="text-green-500 w-5 h-5" />
                  </span>
                  Transfer to WhatsApp
                </button>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-1 cursor-pointer hover:border border-white rounded-full">
            <X className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-10 md:pb-12">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 items-end ${message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
          >
            {/* Avatar */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'bot'
                ? 'bg-white text-white'
                : 'bg-gray-400 text-white'
                }`}
            >
              {message.type === 'bot' ? (
                <img
                  src="https://chat-bot-sooty-phi.vercel.app/bot.png"
                  alt="Bot"
                  className="w-6 h-6 rounded-full object-contain"
                />

              ) : (
                <User className="w-5 h-5" />
              )}
            </div>

            {/* Message Content */}
            <div className="max-w-md lg:max-w-lg text-left">
              {message.content && (
                <div
                  style={{
                    borderRadius: message.type === 'bot' ? "20px 20px 20px 3px" : "20px 20px 3px 20px", // Bot vs User
                    maxWidth: "250px",
                    display: "block",
                  }}
                  className={`rounded-2xl px-4 py-3 ${message.type === 'bot'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'bg-[#344b73] text-white'
                    }`}
                >
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formatMessageContent(message.content) }}
                  ></p>
                </div>


              )}

              {/* OPTIONS → with header + wider + better padding */}
              {message.isOption && message.options && (
                <div className="mt-2 rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden" style={{
                  borderRadius: "20px 20px 20px 3px", // Bot vs User
                  maxWidth: "250px",
                  display: "block",
                }}>
                  {message.optionHeader && (
                    <div className="px-4 py-3 bg-gray-50">
                      <p className="text-sm font-semibold text-gray-700">
                        {message.optionHeader}
                      </p>
                    </div>
                  )}
                  {message.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="block w-full cursor-pointer text-center text-sm text-blue-800 px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 border-gray-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        ))}

        {isTyping && (
          <div className="flex gap-3 py-4">
            <div className="w-10 h-10 rounded-full bg-white text-white flex items-center justify-center">
              <img
                src="https://chat-bot-sooty-phi.vercel.app/bot.png"
                alt="Bot"
                className="w-6 h-6 rounded-full object-contain"
              />
            </div>
            <div className="bg-white rounded-2xl px-4 shadow-sm py-4">
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
      <div className="p-4 bg-white">
        <div className="flex gap-2 mb-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-gray-300"
          />
          <button
            onClick={handleSendMessage}
            className="inline-flex items-center justify-center px-3 py-3 bg-[#dfe1e4] font-bold text-[white] text-sm rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Footer branding */}
        <div className="text-center text-xs text-gray-500 pt-2">
          Powered by⚡<span className="font-semibold text-[#344b73]">Wall Street Jr Investments</span>
        </div>
      </div>

    </div>
  );
};

export default ChatBot;
