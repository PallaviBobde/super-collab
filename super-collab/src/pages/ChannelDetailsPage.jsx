// src/components/ChannelDetailsPage.js

import React from "react";

const ChannelDetailsPage = () => {
  // Example data for channel details (replace with your actual data or fetch from backend)
  const channel = {
    id: 1,
    name: "General",
    description: "General discussions and announcements",
    members: [
      { id: 1, name: "John Doe", role: "Admin" },
      { id: 2, name: "Jane Smith", role: "Member" },
      { id: 3, name: "Alex Johnson", role: "Member" },
    ],
    messages: [
      { id: 1, sender: "John Doe", content: "Hello everyone!" },
      { id: 2, sender: "Jane Smith", content: "Hi John!" },
      { id: 3, sender: "Alex Johnson", content: "Good morning!" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900">{channel.name}</h2>
            <p className="mt-2 text-sm text-gray-500">{channel.description}</p>
          </div>
          <div className="border-t border-gray-200">
            {/* Channel members section */}
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Channel Members
              </h3>
              <ul className="mt-4 space-y-2">
                {channel.members.map((member) => (
                  <li key={member.id} className="text-sm text-gray-700">
                    {member.name} - {member.role}
                  </li>
                ))}
              </ul>
            </div>
            {/* Messages section */}
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900">Messages</h3>
              <ul className="mt-4 space-y-2">
                {channel.messages.map((message) => (
                  <li key={message.id} className="flex items-start">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`https://i.pravatar.cc/150?img=${message.id}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {message.sender}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {message.content}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetailsPage;
