import { useState, useRef, useEffect } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Tausi Initiative's assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatBodyRef = useRef(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    // Initialize chat session when opened
    if (isOpen && !sessionId) {
      const initializeSession = async () => {
        try {
          const response = await fetch(`${apiUrl}/api/chatbot/initialize`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
          });
          
          if (!response.ok) {
            throw new Error('Failed to initialize chat session');
          }
          
          const data = await response.json();
          setSessionId(data.sessionId);
        } catch (error) {
          console.error('Error initializing chat:', error);
        }
      };
      
      initializeSession();
    }
  }, [isOpen, sessionId, apiUrl]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use quick chat endpoint
      const response = await fetch(`${apiUrl}/api/chatbot/quick`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      setMessages(prev => [...prev, { 
        text: data.response, 
        isBot: true,
        isFormatted: true
      }]);
    } catch (error) {
      console.error('Error with chatbot API:', error);
      setMessages(prev => [...prev, { 
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <ChatWindow 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
        isLoading={isLoading}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        chatBodyRef={chatBodyRef}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
};

export default ChatBot;
