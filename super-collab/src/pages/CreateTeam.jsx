// src/components/CreateTeam.js

import React, { useState } from "react";
import { databases } from "../appwrite";

const CreateTeam = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const team = await databases.createDocument(
        "YOUR_DATABASE_ID", // Replace with your database ID
        "teams", // Collection ID
        "unique()",
        { name, description }
      );

      // Optionally, add the current user as the team owner
      const user = await account.get();
      await databases.createDocument(
        "YOUR_DATABASE_ID", // Replace with your database ID
        "teamMembers", // Collection ID
        "unique()",
        { team_id: team.$id, user_id: user.$id, role: "owner" }
      );

      alert("Team created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create team");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Team</h2>
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
          Create Team
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;
