'use client'

import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';
import TextWidget from './HyperBold';
import MindMap from './MindMap';
import CitationGenerator from './CitationGenerator';

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
      <h1 className={`text-5xl mb-4 font-bold text-center ${isDarkMode ? 'text-black' : 'text-white'}`}>
            Plugins
        </h1>
      <div className="flex-grow flex flex-col text-center align-text-top justify-center">
        
        <div className='flex gap-4 '>
            <TextWidget />
            <CitationGenerator/>
        </div>
      </div>
      <footer className={`text-sm align-middle text-center text-white ${isDarkMode ? 'text-white' : ''}`}>
        &copy; 2023 Studently Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;