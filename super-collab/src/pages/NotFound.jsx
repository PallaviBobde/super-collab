// src/components/NotFoundPage.js

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              404 - Not Found
            </h2>
            <p className="mt-4 text-gray-600">
              The page you're looking for could not be found.
            </p>
            <p className="mt-4">
              <a href="/" className="text-blue-500 hover:text-blue-600">
                Go back to home
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
