open -e MusicBizChatbot.js

import React, { useState } from "react";

const MusicBizChatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! Ask me anything about music biz deals.", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = { text: "Let me think... (I'll process real responses in the next version)", sender: "bot" };
      setMessages([...messages, userMessage, botResponse]);
    }, 1000);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Music Biz Chatbot</h2>
      <div className="h-60 overflow-y-auto bg-white p-2 mb-2 rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-1 text-${msg.sender === "bot" ? "left" : "right"}`}>
            <span className={msg.sender === "bot" ? "text-blue-500" : "text-green-500"}>{msg.text}</span>
          </div>
        ))}
      </div>
      <input 
        className="w-full p-2 border rounded" 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && handleSend()} 
        placeholder="Ask about publishing, syncs, or deals..."
      />
      <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleSend}>Send</button>
    </div>
  );
};

export default MusicBizChatbot;


git add .
git commit -m "Added chatbot code"
git add .
git commit -m "Added chatbot code"

ls



touch MusicBizChatbot.js
open -e MusicBizChatbot.js
