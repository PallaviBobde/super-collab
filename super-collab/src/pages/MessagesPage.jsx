// src/components/MessagesPage.js

import React, { useState } from "react";

const MessagesPage = () => {
  // Example data for messages (replace with your actual data or fetch from backend)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      content: "Hello everyone!",
      timestamp: "10:00 AM",
    },
    { id: 2, sender: "Jane Smith", content: "Hi John!", timestamp: "10:05 AM" },
    {
      id: 3,
      sender: "Alex Johnson",
      content: "Good morning!",
      timestamp: "10:10 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const newMessageObj = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900">Messages</h2>
          </div>
          <div className="border-t border-gray-200">
            {/* Message list */}
            <div className="px-4 py-5 sm:p-6">
              <ul className="space-y-4">
                {messages.map((message) => (
                  <li key={message.id} className="flex">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://i.pravatar.cc/150?img=${message.id}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {message.sender}
                      </div>
                      <div className="text-sm text-gray-700">
                        {message.content}
                      </div>
                      <div className="text-xs text-gray-500">
                        {message.timestamp}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Message input form */}
            <form onSubmit={handleMessageSubmit}>
              <div className="border-t border-gray-200 px-4 py-4 sm:p-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Type a message..."
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
