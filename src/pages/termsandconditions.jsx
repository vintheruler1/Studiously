import React from 'react';
import Navbar from './NavBar';

const TermsAndConditions = ({ isDarkMode }) => {
  return (
    <div className={`flex flex-col items-center min-h-screen ${isDarkMode ? 'dark bg-white' : 'bg-blue-400'}`}>
      <Navbar />
      <div className="text-center my-2">
        {/* Your page title or header here */}
        <h1 className={`text-5xl mb-4 font-bold text-center my-6 py-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>
          Terms and Conditions
        </h1>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-3/5">
          {/* Your terms and conditions content here */}
          <div className={`border-2 border-white rounded-lg p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-white'}`}>
            <p className='text-2xl text-center font-bold py-2 my-2'>
              Disclaimer
            </p>
            <p className='text-white text-lg py-2 my-2'>
              This website, Studiously, is provided for educational and productivity purposes. You, the user, are solely responsible for the use of this service. We are not responsible for any academic misconduct, including but not limited to cheating, plagiarism, or any other inappropriate use of the service. You use Studiously at your own risk, and we disclaim any liability for any consequences of its use.
            </p>
          </div>
        </div>
      </div>

      <footer className={`text-sm align-middle text-center text-white`}>
        &copy; 2023 Studiously Inc. All Rights Reserved |{' '}
        <a href="/AboutUs" className="text-white hover:underline">About Us</a> |{' '}
        <a href="/terms-and-conditions" className="text-white hover:underline">Terms and Conditions</a>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
