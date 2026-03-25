import { generateAvatarUrl } from '../../utils/avatar';
import { formatMessage } from './utils';

const ChatMessage = ({ message }) => {
  const { text, isBot, isFormatted } = message;

  return (
    <div className={`mb-4 flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <img src="/Tausi Initiative.svg" alt="Bot" className="w-full h-full object-cover" />
        </div>
      )}
      <div 
        className={`max-w-[80%] py-2 px-3 rounded-lg ${
          isBot 
            ? 'bg-white border border-gray-200 text-black' 
            : 'bg-[#e83e8c] text-black'
        }`}
      >
        {isFormatted ? (
          <div 
            className="text-sm md:text-sm chat-message"
            dangerouslySetInnerHTML={{ __html: formatMessage(text) }}
          />
        ) : (
          <p className="text-sm md:text-sm whitespace-pre-wrap">{text}</p>
        )}
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full overflow-hidden ml-2 flex-shrink-0">
          <img 
            src={generateAvatarUrl("User")} 
            alt="User" 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
