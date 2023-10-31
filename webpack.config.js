const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',
  output: {
    // Output directory and filename for the bundled code
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$,
        exclude: /node_modules/,
        use: 'babel-loader', // You might need Babel for JavaScript/JSX
      },
    ],
  },
};
