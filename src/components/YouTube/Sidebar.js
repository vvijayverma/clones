import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full bg-white text-black shadow-md p-4">
      <div>
        <ul className="mb-6">
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Home</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Shorts</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Videos</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Live</li>
        </ul>
        <h1 className="font-bold text-xl mb-3">Subscriptions</h1>
        <ul className="mb-6">
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Music</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Sports</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Gaming</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Movies</li>
        </ul>
        <h1 className="font-bold text-xl mb-3">Watch Later</h1>
        <ul>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Music</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Sports</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Gaming</li>
          <li className="cursor-pointer rounded py-2 px-4 hover:bg-gray-800 hover:text-white">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
