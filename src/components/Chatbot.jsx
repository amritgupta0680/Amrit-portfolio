import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import "../styles/Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am Amrit's AI assistant. Ask me anything about his skills, projects, or background!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const apiMessagesPayload = newMessages.filter(
        (msg, index) => !(index === 0 && msg.role === "assistant")
      );

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessagesPayload })
      });

      if (!response.ok) {
        let errMsg = "Failed to communicate with AI";
        try {
          const errData = await response.json();
          if (errData.error) errMsg = errData.error;
        } catch (e) {}
        throw new Error(errMsg);
      }

      const data = await response.json();
      const aiMsg = data.choices[0].message;
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: `Oops! We hit a snag. Error: ${error.message}. Please try again later.` }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-left">
                <div className="chatbot-bot-icon">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="chatbot-title">Amrit AI</h3>
                  <p className="chatbot-subtitle">Always online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="chatbot-close-btn"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`chatbot-msg-row ${msg.role}`}
                >
                  {msg.role === "assistant" && (
                    <div className="chatbot-bot-icon-small">
                      <Bot size={14} />
                    </div>
                  )}
                  
                  <div className={`chatbot-bubble ${msg.role}`}>
                    {msg.content}
                  </div>

                  {msg.role === "user" && (
                    <div className="chatbot-user-icon">
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="chatbot-typing-container">
                  <div className="chatbot-bot-icon-small">
                    <Bot size={14} />
                  </div>
                  <div className="chatbot-typing-bubble">
                    <motion.div 
                      className="chatbot-dot"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="chatbot-dot"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="chatbot-dot"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="chatbot-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="chatbot-input"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="chatbot-send-btn"
                aria-label="Send Message"
              >
                <Send size={18} className={input.trim() && !isTyping ? "chatbot-send-icon" : ""} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="chatbot-toggle-btn"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
