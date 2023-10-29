import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-blue-400 p-4 flex justify-center items-center">
      <div className="flex items-center text-center space-x-4">
        <Link legacyBehavior href="/">
          <a className="text-white text-xl hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Home</a>
        </Link>
        <Link legacyBehavior href="./Planner">
          <a className="text-white text-xl hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Planner</a>
        </Link>
        <Link legacyBehavior href="./Resources">
          <a className="text-white text-xl hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Resources</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
