// src/components/chat/ChatInput.jsx

import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 bg-white border-t"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;