// src/components/CreateBoard.js

import React, { useState } from "react";
import { databases } from "../appwriteConfig";

const CreateBoard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        "667901930007ab2d7ad9", // Replace with your database ID
        "66793d390010f3c597a5", // Collection ID
        "unique()",
        { name, description }
      );
    //   alert("Board created successfully!");
    } catch (error) {
      console.error(error);
    //   alert("Failed to create board");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Board</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Board
        </button>
      </form>
    </div>
  );
};

export default CreateBoard;
