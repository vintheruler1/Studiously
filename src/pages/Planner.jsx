import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';
import Planner from './planner_div';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-blue-400'}`}>
      <Navbar />
      <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
      <h1 className={`text-4xl mb-4 font-bold text-center my-5 align-top ${isDarkMode ? 'text-black' : 'text-white'}`}>
        Planner
      </h1>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className='w-3/4 my-2'> {/* Adjust the width of the Planner here */}
          <Planner />
        </div>
      </div>
      <footer className={`text-sm align-middle text-center text-gray-500 ${isDarkMode ? 'dark:text-gray-400' : ''}`}>
        &copy; 2023 Studently Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
