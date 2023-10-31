import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const getButtonSize = () => {
    // You can adjust these values as needed
    const screenWidth = window.innerWidth;
    if (screenWidth <= 640) {
      return "sm";
    } else if (screenWidth <= 1024) {
      return "md";
    } else {
      return "lg";
    }
  };

  const buttonSize = getButtonSize();

  return (
    <div className="to-blue-600 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link legacyBehavior href="/">
            <a className={`text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black text-${buttonSize}`}>Studiously</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/Planner">
            <a className={`text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black text-${buttonSize}`}>Planner</a>
          </Link>
          <Link legacyBehavior href="/Resources">
            <a className={`text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black text-${buttonSize}`}>Resources</a>
          </Link>
          <Link legacyBehavior href="/plugins">
            <a className={`text-white text-lg mt-2 text-center rounded-full px-4 sm:px-3 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 hover:text-black text-${buttonSize}`}>Tools</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
