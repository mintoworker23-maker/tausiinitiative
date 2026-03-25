import Card from '../Card';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow = ({ 
  isOpen, 
  setIsOpen, 
  messages, 
  isLoading, 
  inputValue, 
  setInputValue, 
  handleSubmit, 
  chatBodyRef, 
  messagesEndRef 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 md:inset-auto md:relative flex items-center justify-center md:block">
      {/* Mobile overlay backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
      
      <Card backgroundColor="bg-white" textColor="text-black" className="relative z-10 w-full md:w-auto max-w-md mx-auto md:mx-0">
        <div className="w-full h-[85vh] md:h-[450px] md:w-[350px] lg:w-[380px] flex flex-col">
          {/* Chat header */}
          <div className="bg-[#e83e8c] text-black px-4 py-3 flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img src="/Tausi Initiative.svg" alt="Tausi Initiative" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold">Tausi Initiative Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-black hover:bg-[#32c932] p-2 rounded-full transition-colors duration-200"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Chat body */}
          <div 
            ref={chatBodyRef}
            className="flex-1 p-4 overflow-y-auto bg-gray-50"
          >
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                  <img src="/Tausi Initiative.svg" alt="Bot" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white border border-gray-200 text-gray-500 py-2 px-3 rounded-lg flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <ChatInput 
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </Card>
    </div>
  );
};

export default ChatWindow;
