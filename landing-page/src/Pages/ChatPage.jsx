
import { useLocation, useParams } from "react-router-dom";
import ChatBox from "../Components/chats/ChatBox";
import ChatInput from "../Components/chats/ChatInput";
import axios from "axios";
import { useEffect, useState } from "react";
const user = JSON.parse(localStorage.getItem("user"));
console.log("Logged-in User:", user);
const ChatPage = () => {
  const location = useLocation();
  const { id } = useParams();

  const mentor = location.state?.mentor;
  console.log("Mentor Object:", mentor);
console.log("Mentor ID:", mentor?.id);

  console.log(id);
  console.log(mentor);

  const [messages, setMessages] = useState([]);
useEffect(() => {
  const loadMessages = async () => {

    if (!mentor || !user) return;



    try {
     const response = await axios.get(
  `http://localhost:5000/messages/${user.id}/${mentor.id}`
);

      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (mentor) {
    loadMessages();
  }
}, [mentor,user.id]);
const handleSendMessage = async (text) => {

  console.log("Message to send:", text);
  console.log("Mentor:", mentor);
console.log({
    sender_id: user.id,
    receiver_id: mentor.id,
    message: text
});
  try {
    const postResponse = await axios.post("http://localhost:5000/messages", {
  sender_id: user.id,
  receiver_id: mentor.id,
  message: text,
});

    console.log("POST response:", postResponse.data);

  const getResponse = await axios.get(
  `http://localhost:5000/messages/${user.id}/${mentor.id}`
);
    console.log("GET response:", getResponse.data);

    setMessages(getResponse.data);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
};

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-8">
  <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col h-[85vh]">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-xl font-semibold shadow">
        Chat with {mentor?.name}
      </div>

     <ChatBox 
   messages={messages}
   user={user}
/>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
    </div>
    
  );
};

export default ChatPage;