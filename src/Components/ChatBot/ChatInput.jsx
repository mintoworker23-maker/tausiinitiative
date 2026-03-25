const ChatInput = ({ inputValue, setInputValue, handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex sticky bottom-0 bg-white">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 px-3 py-3 md:py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#e83e8c] text-base"
        placeholder="Type a message..."
        disabled={isLoading}
      />
      <button
        type="submit"
        className="bg-[#e83e8c] text-black px-4 py-3 md:py-2 rounded-r-lg hover:bg-[#32c932] transition-colors duration-200 disabled:opacity-50"
        disabled={isLoading || !inputValue.trim()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
