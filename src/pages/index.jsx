import React, { useState } from 'react';
import Clock from 'react-live-clock';
import Navbar from './NavBar';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-blue-400'}`}>
      <title>Studiously</title>
      <Navbar />
      <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white text-center my-2' />
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
        <a href="/termsandconditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

export default Home;
