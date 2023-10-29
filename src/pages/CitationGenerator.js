import React, { Component } from 'react';
import axios from 'axios';

class CitationGenerator extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      selectedFormat: 'mla', // Default to MLA format
      generatedCitation: '',
      author: '',
      date: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleFormatChange = (format) => {
    this.setState({ selectedFormat: format });
  };

  fetchWebsiteData = () => {
    // Assuming the input is a URL, and we want to fetch the author and date.
    axios.get(this.state.inputText)
      .then((response) => {
        // You need to implement the logic to extract the author and date from the website.
        // For this example, we'll assume the author and date are retrieved and set to state.
        const author = 'Author Name'; // Extracted author.
        const date = '2023'; // Extracted date.

        this.setState({ author, date });
      })
      .catch((error) => {
        console.error('Error fetching website data:', error);
      });
  };

  generateCitation = () => {
    const { inputText, selectedFormat, author, date } = this.state;

    if (selectedFormat === 'mla') {
      if (author && date) {
        const citation = `${author}. "${inputText}." Website. ${date}.`;
        this.setState({ generatedCitation: citation });
      } else {
        this.setState({ generatedCitation: 'Author and Date are required for MLA format.' });
      }
    } else if (selectedFormat === 'apa') {
      if (author && date) {
        const citation = `${author} (${date}). ${inputText}.`;
        this.setState({ generatedCitation: citation });
      } else {
        this.setState({ generatedCitation: 'Author and Date are required for APA format.' });
      }
    } else if (selectedFormat === 'chicago') {
      if (author && date) {
        const citation = `${author}. "${inputText}." Website (${date}).`;
        this.setState({ generatedCitation: citation });
      } else {
        this.setState({ generatedCitation: 'Author and Date are required for Chicago format.' });
      }
    }
  };

  render() {
    return (
      <div className="container mx-auto p-4 border rounded-lg mb-4" style={{ maxWidth: '600px' }}>
        
        <div className="mb-4">
          <input
            className="border p-2"
            type="text"
            placeholder="Enter a website URL"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-4">
          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={this.fetchWebsiteData}>Fetch Author and Date</button>
        </div>
        <div className="mb-4">
          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => this.handleFormatChange('mla')}>MLA</button>
          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => this.handleFormatChange('apa')}>APA</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => this.handleFormatChange('chicago')}>Chicago</button>
        </div>
        <div className="mb-4">
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={this.generateCitation}>Generate Citation</button>
        </div>
        <div>
          <h2 className="text-xl mb-2">Citation:</h2>
          <p>{this.state.generatedCitation}</p>
        </div>
      </div>
    );
  }
}

export default CitationGenerator;
