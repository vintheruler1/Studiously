import React, { useState } from 'react';

const TextWidget = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const formatText = () => {
    const words = inputText.split(' ');
    const formattedWords = words.map((word, index) => {
      if (word.length >= 2) {
        let numbers = word.length;
        return (
          <span key={index} className="font-semibold ">
            <span className="text-indigo-700"> {word.slice(0, 2)}</span>
            <span className="font-normal text-white">{word.slice(2)}</span>&nbsp;
          </span>
        );
      }
      return (
        <span key={index} className="font-extrabold">
          {word}&nbsp;
        </span>
      );
    });
    setFormattedText(formattedWords);
  };

  return (
    <div className="border p-4 rounded-lg mb-4 mx-auto" style={{ width: '80%', padding: '10px' }}>
      <div className="w-max mx-auto">
        <h1 className='text-4xl font-bold my-2 text-white text-center'>HyperBold</h1>
        <textarea
          className="w-full h-40 border border-gray-300 dark:border-gray-700 rounded p-2 text-black"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
          style={{ width: '100%', maxWidth: '100%' }}
        />
      </div>
      <button
        className="bg-blue-600 hover-bg-blue-800 text-white font-bold py-2 px-4 mx-2 rounded text-center object-center items-center"
        onClick={formatText}
      >
        Format Text
      </button>
      <div className="border p-4 rounded" style={{ overflow: 'auto', whiteSpace: 'wrap' }}>
        <div className="font-semibold mx-2 text-white">
          Formatted Text:
          <div className="w-max bg-dark-blue text-white p-4 rounded" style={{ whiteSpace: 'wrap', maxHeight: '200px', overflowY: 'scroll' }}>
            {formattedText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWidget;
