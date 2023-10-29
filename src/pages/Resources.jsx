import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';

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
      <div className="text-center my-2">
        <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white' />
      </div>
      <div className="flex-grow flex flex-col items-center">
        <div className="w-3/4">
          <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Resources
          </h1>
          <div className='flex gap-4'>
            <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
              <p className='text-2xl text-center font-bold py-2 my-2'>
                Pomodoro Technique
              </p>
              <p className='text-white text-lg py-2 my-2'>
                The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
              </p>
              <p className='text-white text-lg text-center py-2 my-2'>
              https://pomofocus.io/
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-sm text-center text-white">
        &copy; 2023 Studently Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
