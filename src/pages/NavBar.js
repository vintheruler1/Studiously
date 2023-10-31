import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link legacyBehavior href="/">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Studiously</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/Planner">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Planner</a>
          </Link>
          <Link legacyBehavior href="/Resources">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Resources</a>
          </Link>
          <Link legacyBehavior href="/plugins">
            <a className="text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">Tools</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          /* Adjust button sizes for smaller screens */
          .rounded-full {
            /* Reduce border-radius for a more square look */
            border-radius: 4px;
          }
          .px-4 {
            /* Reduce horizontal padding */
            padding-left: 8px;
            padding-right: 8px;
          }
          .py-2 {
            /* Reduce vertical padding */
            padding-top: 4px;
            padding-bottom: 4px;
          }
          .text-lg {
            /* Reduce font size */
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
