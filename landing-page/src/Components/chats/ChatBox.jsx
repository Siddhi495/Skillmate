import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
const ChatBox = ({ messages,user }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.length === 0 ? (
        <div className="flex justify-center items-center h-full text-gray-400">
          Start a conversation...
        </div>
      ) : (
       messages.map((msg) => (
   <MessageBubble
      key={msg.id}
      message={msg}
      currentUserId={user.id}
   />
))
      )}

      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;