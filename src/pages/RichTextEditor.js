import React, { useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import Cookies from 'js-cookie';

const RichTextEditor = () => {
  const defaultText = '<p>Start typing here...</p>';
  const [content, setContent] = useState(Cookies.get('editorContent') || defaultText);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    Cookies.set('editorContent', content, { expires: 7 });
  }, [content]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 5000);
  };

  const handleDelete = () => {
    setContent(defaultText);
  };

  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 text-center">Rich Text Editor</h2>
      {content === defaultText && (
        <div className="placeholder">Start typing here...</div>
      )}
      <ContentEditable
        className="bg-white text-gray-800 p-2 rounded-lg"
        html={content === defaultText ? '' : content}
        onChange={handleChange}
      />
      <div className="flex justify-between mt-4">
        <button
          className="bg-green-500 text-white p-2 rounded-lg"
          onClick={handleCopyToClipboard}
        >
          Copy
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {copySuccess && (
        <div className="text-yellow-400 text-lg mt-2 text-center">
          Copied!
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
