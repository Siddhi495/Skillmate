// src/components/chat/MessageBubble.jsx

import React from "react";

const MessageBubble = ({ message, currentUserId }) => {

const isUser = message.sender_id === currentUserId;

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">
          {message.message}
        </p>

        <p
          className={`mt-1 text-xs ${
            isUser ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {message.message.created_at}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;