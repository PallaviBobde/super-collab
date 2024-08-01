// src/components/BoardDetailsPage.js

import React from "react";

const BoardDetailsPage = () => {
  // Example data for a single board (replace with your actual data or fetch from backend)
  const board = {
    id: 1,
    title: "Project A",
    description: "This is project A description.",
    lists: [
      {
        id: 101,
        title: "To Do",
        cards: [
          {
            id: 1001,
            title: "Task 1",
            description: "Complete feature A",
            assignee: "John Doe",
          },
          {
            id: 1002,
            title: "Task 2",
            description: "Fix bug in component B",
            assignee: "Jane Smith",
          },
        ],
      },
      {
        id: 102,
        title: "In Progress",
        cards: [
          {
            id: 1003,
            title: "Task 3",
            description: "Update documentation",
            assignee: "Emily Johnson",
          },
        ],
      },
      {
        id: 103,
        title: "Done",
        cards: [
          {
            id: 1004,
            title: "Task 4",
            description: "Deploy to production",
            assignee: "Alex Brown",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                {board.title}
              </h2>
              <p className="text-sm text-gray-500">{board.description}</p>
            </div>
          </div>
          {/* Lists section */}
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {board.lists.map((list) => (
                <div key={list.id} className="bg-gray-50 rounded-lg p-4 shadow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {list.title}
                  </h3>
                  {/* Cards list */}
                  <ul className="divide-y divide-gray-200">
                    {list.cards.map((card) => (
                      <li key={card.id} className="py-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {card.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {card.description}
                            </p>
                          </div>
                          <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {card.assignee}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailsPage;
