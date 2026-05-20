import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Project 1</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Project 2</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Project 3</h3>
          <p>Short description of the project.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
