// src/components/MessageDetailsPage.js

import React from "react";

const MessageDetailsPage = () => {
  // Example data for a single message (replace with your actual data or fetch from backend)
  const message = {
    id: 1,
    sender: "John Doe",
    content: "Hello everyone! This is a detailed message example.",
    timestamp: "10:00 AM",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://i.pravatar.cc/150?img=${message.id}`}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">
                  {message.sender}
                </div>
                <p className="mt-1 text-sm text-gray-700">{message.content}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
          {/* Actions section (e.g., reply, edit, delete) */}
          <div className="border-t border-gray-200 px-4 py-4 sm:p-6">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reply
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetailsPage;
