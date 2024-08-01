// src/components/TeamsPage.js

import React from "react";

const TeamsPage = () => {
  // Example data for teams (replace with your actual data or fetch from backend)
  const teams = [
    { id: 1, name: "Development Team", members: 5 },
    { id: 2, name: "Design Team", members: 4 },
    { id: 3, name: "Marketing Team", members: 6 },
    { id: 4, name: "Sales Team", members: 3 },
    { id: 5, name: "Support Team", members: 7 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Teams</h2>
          {/* Add button for creating new team */}
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create New Team
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Team cards */}
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {team.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {team.members} members
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                {/* Action buttons for each team (e.g., join, manage) */}
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Join
                </button>
                <button
                  type="button"
                  className="inline-flex items-center ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
