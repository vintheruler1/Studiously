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
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <title>About Us | Studiously</title>
      <Navbar />
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="text-center my-6">
        <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white' />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-3/5">
          <h1 className={`text-5xl mb-4 font-bold text-center py-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>
            About Us
          </h1>
          <div className='flex flex-wrap gap-4 justify-center'>

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  Who are we?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  Studiously was made by students <a href="https://vinesh.software" className="text-white rounded-full hover:underline text-shadow-md text-center">Vinesh R.</a> and Lydia P. for the 2023 Congressional App Challenge. We are both high school students who wanted to make a productivity app that would help students like us.
                </p>
              </div>
            </div>
{/*             
            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  Who are we?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  Studiously was made by students <a href="https://vinesh.software" className="text-white rounded-full hover:underline text-shadow-md text-center">Vinesh R.</a> and Lydia P. for the 2023 Congressional App Challenge. We are both high school students who wanted to make a productivity app that would help students like us.
                </p>
              </div>
            </div> */}

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  How long did this take to make?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  As of writing this, Studiously has about 100 hours put into development.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  What is the future of this project?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  We hope to keep Studiously up for a long time but there may be several factors such as money and hosting that could lead to taking it down.
                </p>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 p-4`}>
              <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <p className='text-2xl text-center font-bold py-2 my-2'>
                  Support our project?
                </p>
                <p className='text-white text-lg py-2 my-2'>
                  We here at Studently would love if you could donate money to us! Links coming soon :).
                </p>
              </div>
            </div>

            </div>
        </div>
      </div>

      <footer className={`text-sm align-middle text-center text-white mt-auto py-4`}>
        &copy; 2023 Studiously Inc. All Rights Reserved |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

export default Home;