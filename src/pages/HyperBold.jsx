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
            <span className="text-blue-600"> {word.slice(0, 2)}</span>
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
    <div className="absolute top-0 left-0 mt-8 flex flex-col items-start">
      <div className="border p-4 rounded-lg mb-4">
        <h1 className='text-4xl text-center font-bold my-2 text-white'>HyperBold</h1>
        <textarea
          className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-black"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={formatText}
      >
        Format Text
      </button>
      <div className="mt-4 max-w-sm">
        <div className="font-semibold mx-2">
          Formatted Text:
          <div className="max-w-sm bg-dark-blue text-white p-4 rounded">
            {formattedText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWidget;