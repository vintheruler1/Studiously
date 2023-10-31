import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="to-blue-600 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link legacyBehavior href="/">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Studiously</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/Planner">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Planner</a>
          </Link>
          <Link legacyBehavior href="/Resources">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Resources</a>
          </Link>
          <Link legacyBehavior href="/plugins">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Tools</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
