const ChatButton = ({ isOpen, onClick }) => {
  if (isOpen) return null;

  return (
    <button 
      onClick={onClick} 
      className="bg-[#e83e8c] text-black rounded-full p-3 md:p-3 shadow-lg hover:bg-[#32c932] transition-colors duration-200 flex items-center justify-center w-12 h-12 md:w-12 md:h-12"
      aria-label="Open chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  );
};

export default ChatButton;
