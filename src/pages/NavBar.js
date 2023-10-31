import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-blue-600 p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <Link legacyBehavior href="/">
          <a className="text-white text-lg text-center rounded-full p-2 sm:p-4 bg-blue-500 hover:bg-blue-600 hover:text-black mb-2 sm:mb-0 sm:mr-4">Studiously</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/Planner">
            <a className="text-white text-lg text-center rounded-full p-2 sm:p-4 bg-blue-500 hover:bg-blue-600 hover:text-black">Planner</a>
          </Link>
          <Link legacyBehavior href="/Resources">
            <a className="text-white text-lg text-center rounded-full p-2 sm:p-4 bg-blue-500 hover:bg-blue-600 hover:text-black">Resources</a>
          </Link>
          <Link legacyBehavior href="/plugins">
            <a className="text-white text-lg text-center rounded-full p-2 sm:p-4 bg-blue-500 hover:bg-blue-600 hover:text-black">Tools</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
