// src/components/TasksPage.js

import React, { useState } from "react";

const TasksPage = () => {
  // Example data for tasks (replace with your actual data or fetch from backend)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Complete feature A",
      dueDate: "2024-06-30",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Fix bug in component B",
      dueDate: "2024-07-05",
      status: "Pending",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Update documentation",
      dueDate: "2024-07-10",
      status: "Completed",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900">Tasks</h2>
          </div>
          <div className="border-t border-gray-200">
            {/* Task list */}
            <ul className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <li key={task.id} className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {task.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {task.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <svg
                      className="h-4 w-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                    <p>Due by {formatDate(task.dueDate)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format date (e.g., '2024-06-30' to 'June 30, 2024')
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "Pending":
      return "bg-blue-100 text-blue-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default TasksPage;
