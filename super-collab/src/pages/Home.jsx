// src/components/HomePage.js

import React from "react";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Welcome to Your Website
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Where amazing things happen
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="px-6 py-12 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              metus eget ipsum consequat maximus.
            </p>
          </div>
          <div className="mt-8 px-6 py-12 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Vestibulum nec sapien eget velit aliquam placerat a sed augue.
              Phasellus convallis dui non semper sodales.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
