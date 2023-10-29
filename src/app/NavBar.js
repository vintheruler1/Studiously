import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-blue-400 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <a className="text-white hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Home</a>
        </Link>
        <Link href="/planner">
          <a className="text-white hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Planner</a>
        </Link>
        <Link href="/resources">
          <a className="text-white hover:bg-blue-500 hover:text-black rounded-md px-2 py-1">Resources</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
