'use client'

import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './navbar';

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
      <Navbar className="text-center items-center"/>
      <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className={`text-4xl mb-4 font-bold  align-top ${isDarkMode ? 'text-black' : 'text-white'}`}>
          Welcome to Studently
        </h1>
        <div className='flex gap-4'>
          <div className={`border border-blue-300 rounded-lg p-4 shadow-md ${isDarkMode ? 'text-black' : 'text-white'}`}>
            <p>Made by Students, for Students</p>
            <img src="https://github.com/vintheruler1/Studiously/blob/main/src/app/studiously.png?raw=true" alt="logo" />
          </div>
        </div>
        {/* <TextWidget />
        <Planner className="container mx-auto mt-8" /> */}
      </div>
      <footer className={`text-sm align-middle text-center text-gray-500 ${isDarkMode ? 'dark:text-gray-400' : ''}`}>
        &copy; 2023 Studently Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
