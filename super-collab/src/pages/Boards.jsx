// src/components/BoardsPage.js

import React from "react";

const BoardsPage = () => {
  // Example data for boards (replace with your actual data or fetch from backend)
  const boards = [
    {
      id: 1,
      title: "Project A",
      description: "This is project A description.",
    },
    {
      id: 2,
      title: "Project B",
      description: "This is project B description.",
    },
    {
      id: 3,
      title: "Project C",
      description: "This is project C description.",
    },
    {
      id: 4,
      title: "Project D",
      description: "This is project D description.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900">Boards</h2>
          </div>
          <div className="border-t border-gray-200">
            {/* Boards list */}
            <ul className="divide-y divide-gray-200">
              {boards.map((board) => (
                <li key={board.id} className="px-4 py-5 sm:p-6">
                  <a
                    href={`/boards/${board.id}`}
                    className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {board.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {board.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
