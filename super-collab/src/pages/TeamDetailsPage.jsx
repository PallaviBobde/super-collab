// src/components/TeamDetailsPage.js

import React from "react";

const TeamDetailsPage = () => {
  // Example data for team details (replace with your actual data or fetch from backend)
  const team = {
    id: 1,
    name: "Development Team",
    description:
      "This is the development team responsible for building amazing products.",
    members: [
      { id: 1, name: "John Doe", role: "Frontend Developer" },
      { id: 2, name: "Jane Smith", role: "Backend Developer" },
      { id: 3, name: "Alex Johnson", role: "UI/UX Designer" },
    ],
    projects: [
      { id: 1, name: "Project A", status: "In Progress" },
      { id: 2, name: "Project B", status: "Completed" },
      { id: 3, name: "Project C", status: "Pending" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900">{team.name}</h2>
            <p className="mt-2 text-sm text-gray-500">{team.description}</p>
          </div>
          <div className="border-t border-gray-200">
            {/* Team members section */}
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Members
              </h3>
              <ul className="mt-4 space-y-2">
                {team.members.map((member) => (
                  <li key={member.id} className="text-sm text-gray-700">
                    {member.name} - {member.role}
                  </li>
                ))}
              </ul>
            </div>
            {/* Projects section */}
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
              <ul className="mt-4 space-y-2">
                {team.projects.map((project) => (
                  <li key={project.id} className="text-sm text-gray-700">
                    {project.name} - {project.status}
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

export default TeamDetailsPage;
