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
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-gradient-to-b from-blue-400 to-blue-600'}`}>
      <title>Resources | Studiously</title>
      <Navbar />
      <div class="shape-blob"></div>
	<div class="shape-blob one"></div>
	<div class="shape-blob two"></div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center my-2">
          <Clock format={'h:mm:ssa'} style={{ fontSize: '1.5em' }} ticking={true} className='text-white' />
        </div>
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-3/5">
          <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Resources
          </h1>
          <div className='flex flex-wrap gap-4 justify-center'>
            <ResourceCard
              title="Pomodoro Technique"
              description="The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks."
              isDarkMode={isDarkMode}
            />
            <ResourceCard
              title="Kanban Method"
              description="The Kanban method is a visual project management system that helps you visualize your work, limit work in progress, and maximize efficiency. It involves using cards and boards to track tasks through various stages."
              isDarkMode={isDarkMode}
            />
            <ResourceCard
              title="Eisenhower Matrix"
              description="The Eisenhower Matrix, also known as the Urgent-Important Matrix, helps you prioritize tasks based on their urgency and importance. It categorizes tasks into four quadrants: Do First, Schedule, Delegate, and Don't Do."
              isDarkMode={isDarkMode}
            />
            <ResourceCard
              title="Getting Things Done (GTD)"
              description="The GTD method, developed by David Allen, focuses on capturing and organizing all your tasks and ideas. It encourages you to create lists of actions, projects, and reference materials, and then decide what to do next based on context and priority."
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
      <footer className={`text-sm text-center text-white`}>
        &copy; 2023 Studiously Inc. All Rights Reserved |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

const ResourceCard = ({ title, description, isDarkMode }) => {
  return (
    <div className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 p-4`}>
      <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
        <p className='text-2xl text-center font-bold py-2 my-2'>
          {title}
        </p>
        <p className='text-white text-lg py-2 my-2'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Home;
