import React, { useState, useEffect, useRef } from 'react';
import { Send, User, X, MoreVertical, Clock } from 'lucide-react';
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

    let formatted = text
      .split('\n')
      .map(part => part.trim())
      .join('<br>');

    const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
    const phonePattern = /(\+?\d[\d\s-]{7,}\d)/g;

    formatted = formatted.replace(urlPattern, (url) => {
      const href = url.startsWith("http") ? url : `https://${url}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="botstart-link">${url}</a>`;
    });

    formatted = formatted.replace(emailPattern, (email) => {
      return `<a href="mailto:${email}" class="botstart-link">${email}</a>`;
    });

    formatted = formatted.replace(phonePattern, (phone) => {
      return `<a href="tel:${phone.replace(/\s|-/g, '')}" class="botstart-link">${phone}</a>`;
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

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => { if (!initialized.current) { initializeChat(); initialized.current = true; } }, []);

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
    setTimeout(() => { initializeChat(); initialized.current = true; }, 100);
  };

  const addBotMessage = (content, isOption = false, options, optionHeader = null) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = { id: Date.now().toString(), type: 'bot', content, isOption, options, optionHeader };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (content) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', content }]);
  };

  const handleOptionClick = (option) => {
    addUserMessage(option);
    if (option === 'About Us') setTimeout(() => addBotMessage(faqData.aboutUs.answer), 500);
    else if (option === 'Contact Us') setTimeout(() => addBotMessage(faqData.contactUs.answer), 500);
    else if (option === 'Our Services') {
      setTimeout(() => { addBotMessage("Here are our investment services:"); setTimeout(() => {
        addBotMessage("", true, ['Portfolio Management','Investment Management','Capital Code','Risk Management / Asset Restructuring'], "Choose a service to learn more:");
      }, 800); }, 500);
    } else {
      const serviceKey = Object.keys(faqData.services).find(key => faqData.services[key].question === option);
      if (serviceKey) setTimeout(() => addBotMessage(faqData.services[serviceKey].answer), 500);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    addUserMessage(input);
    const userQuery = input;

    try {
      const res = await fetch("/api/faqs/query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: userQuery }) });
      const data = await res.json();
      setTimeout(() => {
        if (data.success && data.response) addBotMessage(data.response);
        else addBotMessage("I'm sorry, I couldn't find information about that. Please try rephrasing or select from available options.");
      }, 500);
    } catch (error) {
      console.error("Error fetching FAQ:", error);
      addBotMessage("Oops! Something went wrong. Please try again later.");
    }

    setInput("");
  };

  const handleKeyPress = (e) => { if (e.key === 'Enter') handleSendMessage(); };

  return (
    <div className="botstart-chat-container">
      <style>{`
        .botstart-chat-container { display:flex; flex-direction:column; height:100%; background-color: #ffffffff; padding:8px; }
        .botstart-header { background:#344b73; color:white; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; border-radius:8px; box-shadow:0 1px 4px rgba(0,0,0,0.2); position:relative; }
        .botstart-header-left { display:flex; align-items:flex-start; gap:12px; }
        .botstart-avatar-wrapper { width:40px; height:40px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; }
        .botstart-avatar-img { width:32px; height:32px; object-contain; border-radius:50%; }
        .botstart-header-text h2 { font-weight:600; font-size:14px; margin:0; }
        .botstart-header-text p { font-size:10px; color:rgba(255,255,255,0.8); display:flex; align-items:center; gap:4px; margin:0; }
        .botstart-menu-wrapper { position:relative; }
        .botstart-menu { position:absolute; right:0; margin-top:8px; width:224px; background:white; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.2); color:#333; z-index:50; }
        .botstart-menu button { display:flex; align-items:center; gap:12px; padding:12px 16px; width:100%; cursor:pointer; border-radius:8px; background:white; border:none; text-align:left; }
        .botstart-menu button:hover { background:#f1f5f9; }
        .botstart-message-list { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:16px; padding-bottom:48px; }
        .botstart-message { display:flex; gap:12px; align-items:flex-end; }
        .botstart-message.bot { flex-direction:row; }
        .botstart-message.user { flex-direction:row-reverse; }
        .botstart-message-avatar { width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .botstart-message-content { max-width:250px; word-wrap:break-word; }
        .botstart-bubble-bot { background:white; color:#1f2937; border-radius:20px 20px 20px 3px; padding:12px; box-shadow:0 1px 3px rgba(0,0,0,0.1); }
        .botstart-bubble-user { background:#344b73; color:white; border-radius:20px 20px 3px 20px; padding:12px; }
        .botstart-option-container { margin-top:8px; border-radius:20px 20px 20px 3px; background:white; border:1px solid #e5e7eb; overflow:hidden; max-width:250px; }
        .botstart-option-header { padding:12px 16px; background:#f9fafb; font-weight:600; color:#374151; }
        .botstart-option-btn { display:block; width:100%; text-align:center; font-size:12px; color:#1d4ed8; padding:12px 16px; border-bottom:1px solid #e5e7eb; cursor:pointer; background:white; }
        .botstart-option-btn:last-child { border-bottom:none; }
        .botstart-typing { display:flex; gap:12px; padding:16px 0; }
        .botstart-typing-dot { width:8px; height:8px; background:#9ca3af; border-radius:50%; animation:botstart-bounce 1s infinite; }
        .botstart-typing-dot:nth-child(2) { animation-delay:0.1s; }
        .botstart-typing-dot:nth-child(3) { animation-delay:0.2s; }
        @keyframes botstart-bounce { 0%, 80%, 100% { transform:scale(0); } 40% { transform:scale(1); } }
        .botstart-input-container { padding:16px; background:white; display:flex; flex-direction:column; }
        .botstart-input-row { display:flex; gap:8px; margin-bottom:8px; }
        .botstart-send-btn { display:inline-flex; align-items:center; justify-content:center; padding:12px; background:#dfe1e4; color:white; font-weight:bold; font-size:12px; border-radius:9999px; cursor:pointer; }
        .botstart-footer { text-align:center; font-size:10px; color:#6b7280; padding-top:8px; }
        .botstart-link { color:#1d4ed8; text-decoration:underline; display:block; }
      `}</style>

      {/* Chat Header */}
      <div className="botstart-header">
        <div className="botstart-header-left">
          <div className="botstart-avatar-wrapper">
            <img src="https://chat-bot-sooty-phi.vercel.app/bot.png" alt="Bot" className="botstart-avatar-img" />
          </div>
          <div className="botstart-header-text">
            <h2>JUNIOR</h2>
            <p><Clock className="w-3 h-3" /> Usual reply time: 2 to 3 Minutes</p>
          </div>
        </div>

        <div className="botstart-menu-wrapper ">
          <button onClick={() => setMenuOpen(!menuOpen)} className="botstart-menu-toggle cursor-pointer">
            <MoreVertical />
          </button>
          {menuOpen && (
            <div className="botstart-menu" ref={menuRef}>
              <button>💬 Start Live Chat</button>
              <button onClick={refreshChat}>🔄 Refresh Chat</button>
              <button> <FaWhatsapp className="text-green-500 w-5 h-5" /> Transfer to WhatsApp</button>
            </div>
          )}
          <button className='cursor-pointer' onClick={onClose}><X /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="botstart-message-list">
        {messages.map(message => (
          <div key={message.id} className={`botstart-message ${message.type}`}>
            <div className="botstart-message-avatar">
              {message.type === 'bot' ? <img src="https://chat-bot-sooty-phi.vercel.app/bot.png" alt="Bot" className="botstart-avatar-img" /> : <User />}
            </div>
            <div className="botstart-message-content">
              {message.content && (
                <div className={message.type === 'bot' ? 'botstart-bubble-bot' : 'botstart-bubble-user'}
                  dangerouslySetInnerHTML={{ __html: formatMessageContent(message.content) }}
                />
              )}
              {message.isOption && message.options && (
                <div className="botstart-option-container">
                  {message.optionHeader && <div className="botstart-option-header">{message.optionHeader}</div>}
                  {message.options.map((option, idx) => (
                    <button key={idx} className="botstart-option-btn" onClick={() => handleOptionClick(option)}>{option}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="botstart-typing">
            <div className="botstart-message-avatar"><img src="https://chat-bot-sooty-phi.vercel.app/bot.png" alt="Bot" className="botstart-avatar-img" /></div>
            <div className="botstart-bubble-bot">
              <div className="flex space-x-1">
                <div className="botstart-typing-dot"></div>
                <div className="botstart-typing-dot"></div>
                <div className="botstart-typing-dot"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="botstart-input-container">
        <div className="botstart-input-row">
          <Input type="text" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} />
          <button onClick={handleSendMessage} className="botstart-send-btn"><Send /></button>
        </div>
        <div className="botstart-footer">Powered by⚡<span>Wall Street Jr Investments</span></div>
      </div>
    </div>
  );
};

export default ChatBot;
