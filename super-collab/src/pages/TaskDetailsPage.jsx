// src/components/TaskDetailsPage.js

import React from "react";

const TaskDetailsPage = () => {
  // Example data for a single task (replace with your actual data or fetch from backend)
  const task = {
    id: 1,
    title: "Task 1",
    description: "Complete feature A",
    dueDate: "2024-06-30",
    status: "In Progress",
    assignee: "John Doe",
    priority: "Medium",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Task Details</h2>
              <span
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {task.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Assigned to {task.assignee}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Priority: {task.priority}
              </p>
              <p className="mt-4 text-sm text-gray-700">{task.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Due by {formatDate(task.dueDate)}
              </p>
            </div>
          </div>
          {/* Actions section (e.g., edit, delete) */}
          <div className="border-t border-gray-200 px-4 py-4 sm:p-6">
            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

export default TaskDetailsPage;
