import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';
import Link from 'next/link';

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
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <title>Tools | Studiously</title>
      <Navbar className="text-center items-center" />
      <div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
      {isClient && (
        <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
      )}
      <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        Tools
      </h1>
      <div className="flex-grow flex flex-col items-center justify-center mt-2">
        <Link legacyBehavior href="/Hyperbolder">
          <a className="text-white text-lg text-center rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:text-black">
            Hyperbolder
          </a>
        </Link>
        <Link legacyBehavior href="/RichTextEdit">
          <a className="text-white text-lg text-center rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:text-black mt-2">
            Rich Text Editor
          </a>
        </Link>
        <Link legacyBehavior href="/Pomodoro">
          <a className="text-white text-lg text-center rounded-full px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:text-black mt-2">
            Pomodoro Timer
          </a>
        </Link>
      </div>
      <footer className={`text-sm align-middle text-center text-white`}>
        &copy; 2023 Studiously Inc. All Rights Reserved |{' '}
        <a href="/AboutUs" className="text-white hover:underline">
          About Us
        </a>{' '}
        |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">
          Terms and Conditions
        </a>
      </footer>
    </div>
  );
};

export default Home;
