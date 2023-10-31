import React, { useState } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';
import page from './page';
// import '../styles/styles.css';

import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
  // <Page>
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Studiously</title>
      <Analytics />
      <Navbar />
      <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-black' : 'text-white'}`}>
        Welcome to Studiously
      </h1>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className='flex gap-4'>
          <div className={`border border-blue-300 rounded-lg p-4 shadow-md text-center text-xl ${isDarkMode ? 'text-black' : 'text-white'}`}>
            <p className='text-lg'>Your all-in-one homework browser.</p>
            <img src="https://github.com/vintheruler1/Studiously/blob/main/public/studiously.png?raw=true" width={280} height={280} alt="logo" />
          </div>
        </div>
      </div>
      <footer className={`text-sm align-middle text-center text-white`}>
        &copy; 2023 Studiously Inc. All Rights Reserved |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  // </Page>
  );
};

export default Home;